import React from "react";
import { View, FlatList, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import { getMoviesDiscover } from "../../services";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {useRootesHook} from '../../hooks';

import { styles } from "./styles";

export const ListMovies: React.FC = () => {
  const {navigate} = useRootesHook();
  const { data } = useQuery({
    queryKey: ["MovieDiscover"],
    queryFn: getMoviesDiscover,
  });
  return (
    <SafeAreaView 
    style={{flex:1}}>
    <View style={styles.container}>
      <View style={styles.containerList}>
        <FlatList
          data={data}
          ListHeaderComponent={() => (
            <View style={styles.containerHeader}>
              <MaterialCommunityIcons
                name="movie-open-outline"
                style={styles.styledIcon}
                />
            </View>
          )}
          showsVerticalScrollIndicator = {false}
          ItemSeparatorComponent={() => <View style={{marginBottom: 20}} />}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => navigate('Detail', {data: item, type: 'movie'})}
            >

            <View style={styles.containerCard}>
              <View style={styles.containerImgMovie}>
              <Image 
              style={styles.imgMovie}
              source={{uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`}} />
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.titleDetail}>
                  {item.title}
                </Text>
                <Text style={styles.subtileDetail}>
                  {item.release_date}
                </Text>
              </View>
              <View style={styles.containerAvarege}>
              <Text>{item.vote_average.toFixed(1)}</Text>
                <AntDesign name="star" />
              </View>
            </View>
            </TouchableOpacity>

          )}
        />
      </View>
    </View>
              </SafeAreaView>
  );
};
