import { useCallback } from 'react';
import { useMMKVObject } from 'react-native-mmkv';
import { useUser } from './useUser';
import { storageMmkv } from '../../storageMmkv';

const useFavorites = () => {
  const { user } = useUser();
  const [favorites, setFavorites] = useMMKVObject<string[]>(
    `favorite${user?.id}`,
    storageMmkv,
  );

  const addFavorite = useCallback(
    (symbol: string) => {
      const newFavorites = [...(favorites || []), symbol];
      setFavorites(newFavorites);
    },
    [favorites, setFavorites],
  );

  const isFavorite = (symbol: string) => favorites?.includes(symbol);

  const removeFavorite = useCallback(
    (symbol: string) => {
      const newFavorites = favorites?.filter(item => item !== symbol);
      setFavorites(newFavorites);
    },
    [favorites, setFavorites],
  );

  return { favorites: favorites || [], addFavorite, removeFavorite, isFavorite };
};

export { useFavorites };
