import React from 'react';
import { useCallback } from 'react';
import { Image } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Config } from 'react-native-config';
import { ButtonContainer, ButtonText, Layout, TitleText, Subtitle } from './styles';
import GoogleIcon from '../../../assets/Icons/google.svg'
import { useUser } from '../../hooks/useUser';
import { LoginScreenNavigationProp } from '../../navigation/types';


GoogleSignin.configure({
	webClientId: Config.GOOGLE_WEB_CLIENT_ID,
	iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
	scopes: ['profile', 'email'],
});

console.log(Config);

type GoogleSigninError = {
  code?: (typeof statusCodes)[keyof typeof statusCodes];
};

const Login = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {

  const { addUser } = useUser();

  const signIn = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { user } = await GoogleSignin.signIn();
      addUser(user);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      
      const typedError = error as GoogleSigninError;
      if (typedError.code === statusCodes.SIGN_IN_CANCELLED) {
        console.error('Cancel');
      } else if (typedError.code === statusCodes.IN_PROGRESS) {
        console.error('Signin in progress');
      } else if (typedError.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.error('PLAY_SERVICES_NOT_AVAILABLE');
      }
    }
  }, []);

    return (
      <Layout>
        <Image
          resizeMode="contain"
          source={require('../../../assets/Images/image-login.png')}
          style={{
            width: '80%',
            height: 220,
            aspectRatio: 1,
            margin: 40
          }}
        />
        <TitleText>¡Bienvenido!</TitleText>
        <Subtitle>Vas a loguearte con tu cuenta de gmail</Subtitle>
        <ButtonContainer onPress={signIn}>
          <GoogleIcon width={24} height={24} />
          <ButtonText>Login</ButtonText>
        </ButtonContainer>
      </Layout>
    );
};


export { Login };
