import React from 'react';
import {DrawerRoutes} from './DrawerRoutes';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
export const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name='App' component={DrawerRoutes} />
    </Stack.Navigator>
  );
}
