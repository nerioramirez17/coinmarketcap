import React from 'react';
import { FC } from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail, Home, Login } from './src/screens';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { RootStackParams } from './src/navigation/types';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator<RootStackParams>();
const queryClient = new QueryClient();

const App: FC = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Detail} name="Detail" />
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  </>
);

export default App;
