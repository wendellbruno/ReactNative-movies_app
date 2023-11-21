import React from 'react';
import {DrawerRoutes} from './DrawerRoutes';
import {createStackNavigator} from '@react-navigation/stack'
import {DetailScreen} from '../pages'

const Stack = createStackNavigator();
export const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name='App' component={DrawerRoutes} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  );
}
