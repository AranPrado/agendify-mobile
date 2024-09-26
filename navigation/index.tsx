import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { ClientNavigation, ProviderNavigation } from './app.routes';
import { useState } from 'react';
import useAuthStore from 'auth/Auth';
import AuthRoutes from './auth.routes';



const Stack = createStackNavigator<any>();

export default function RootStack() {

  
  const { type, isLoggedIn }: any = useAuthStore()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} // Esconde o header de todas as telas
      >
      {!isLoggedIn ? (
          <Stack.Screen name="Auth" component={AuthRoutes} />
        ) : (
          /* Se logado, checar o tipo de usuário */
          type === 'client' ? (
            <Stack.Screen name="Client" component={ClientNavigation} />
          ) : (
            <Stack.Screen name="Provider" component={ProviderNavigation} />
          )
        )}


      </Stack.Navigator>
    </NavigationContainer>
  );
}
