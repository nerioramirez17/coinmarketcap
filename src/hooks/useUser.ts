import { useCallback } from 'react';
import { User } from '@react-native-google-signin/google-signin';
import { useMMKVObject } from 'react-native-mmkv';
import { storageMmkv } from '../../storageMmkv';

type UserInfo = User['user'];

const useUser = () => {
  const [user, setUser] = useMMKVObject<UserInfo>('user', storageMmkv);

  const addUser = useCallback(
    (userInfo: User['user']) => {
      setUser(userInfo);
    },
    [setUser],
  );

  const clearUser = useCallback(() => {
    setUser(undefined);
  }, [setUser]);

  return {
    addUser,
    clearUser,
    user,
  };
};

export { useUser };
