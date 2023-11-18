import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerRoutes} from './DrawerRoutes';

// import { Container } from './styles';

export const RoutesApp: React.FC = () => {
  return (
    <NavigationContainer>
        <DrawerRoutes />
    </NavigationContainer>
  );
}