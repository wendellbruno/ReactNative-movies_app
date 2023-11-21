import React from "react";
import { View, Text } from "react-native";
import { ContainerBG, ListNewMovies, ListNewSeriesTv } from "../../components";
import { styles } from "./styles";
export const Home: React.FC = () => {
    
  return (
    <ContainerBG>
      <View style={styles.Container}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Dev TV</Text>
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
