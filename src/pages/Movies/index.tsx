import React from 'react';
import { View } from 'react-native';
import {ContainerBG, ListMovies} from '../../components';

export const Movies: React.FC = () => {
  return (
    <ContainerBG>
      <ListMovies />
    </ContainerBG>
  );
}
