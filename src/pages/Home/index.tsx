import React from "react";
import { View, Image, Text } from "react-native";
import { ContainerBG, ListNewMovies } from "../../components";
import { styles } from "./styles";
import {useQuery} from '@tanstack/react-query';
import { getMovies } from "../../services";
export const Home: React.FC = () => {
    /* const movies = useQuery({
        queryKey: ['movies'],
        queryFn: getMovies
    })
    console.log(movies) */
  return (
    <ContainerBG>
      <View style={styles.Container}>
        <View style={styles.header}>
          <Text style={styles.title}>Olá, Wendell</Text>
        </View>
        <View style={styles.containerNewsMovies}>
            <Text style={styles.title}>Novidades</Text>
            <ListNewMovies />
        </View>
        <View style={styles.containerFavorites}>
        </View>
      </View>
    </ContainerBG>
  );
};
