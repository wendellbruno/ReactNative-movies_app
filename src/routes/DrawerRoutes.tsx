import React from 'react';
import { Animated, View } from 'react-native';
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';
import {Home} from '../pages';
import theme from '../global/styles/theme';

const Drawer = createDrawerNavigator();
export const DrawerRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
    initialRouteName='Home'
    screenOptions={{
      drawerContentStyle: {
        backgroundColor: theme.colors.background,
      },
      headerShown: false,
    }}
    >
      <Drawer.Screen name="Home" component={Home} options={{
      }}/>
    </Drawer.Navigator>
  );
}
