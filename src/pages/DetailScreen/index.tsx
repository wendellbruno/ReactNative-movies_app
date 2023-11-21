import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { ParamListBase } from "@react-navigation/native";

export const DetailScreen: React.FC = ({ route }: ParamListBase) => {
  //@ts-ignore
  const { type, data } = route?.params;
  const isMovie: boolean = type === "movie" ? true : false;

  return (
    <View style={styles.container}>
      <View style={styles.containerimg}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
          }}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.containerHeaderDetail}>
          <Text style={styles.title}>{isMovie ? data.title : data.name}</Text>
          <View style={styles.containerAverage}>
          <AntDesign name="star" style={styles.iconDetailStar}/>
          <Text style={styles.textVoteAverage}>{data.vote_average.toFixed(1)}</Text>
          </View>
        </View>
        <Text style={styles.overview}>{data.overview}</Text>
      </View>
    </View>
  );
};
