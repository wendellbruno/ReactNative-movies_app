import React from "react";
import { View, Text } from "react-native";
import { ContainerBG, ListNewMovies, ListNewSeriesTv } from "../../components";
import { styles } from "./styles";
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
        <View style={styles.containerMoviesAndSeries}>
            <Text style={styles.title}>Filmes</Text>
            <ListNewMovies />
        </View>
        <View style={styles.containerMoviesAndSeries}>
            <Text style={styles.title}>Series TV</Text>
            <ListNewSeriesTv />
        </View>
      </View>
    </ContainerBG>
  );
};
