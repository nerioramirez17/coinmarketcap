import { RouteProp } from '@react-navigation/native';
import { Cryptocurrency } from '../api/types';
import { StackNavigationProp } from '@react-navigation/stack';


export type RootStackParams = {
  Login: undefined;
  Home: undefined;
  Detail: { item: Cryptocurrency };
};

type DetailScreenRouteProp = RouteProp<RootStackParams, 'Detail'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParams, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;
export type DetailProps = {
  route: DetailScreenRouteProp;
};

