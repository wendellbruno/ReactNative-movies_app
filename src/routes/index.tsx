import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerRoutes} from './DrawerRoutes';
import {StackRoutes} from './StackRoutes';

export const RoutesApp: React.FC = () => {
  return (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
  );
}