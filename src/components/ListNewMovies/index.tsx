import React from "react";
import { View, FlatList, Image, Text } from "react-native";
import { IMovies } from "../../model";
import { styles } from "./styles";
import {useQuery} from 'react-query';
import { getMovies } from "../../services";

type Props = {
  movies: IMovies[];
};

export const ListNewMovies: React.FC = () => {

  
    const {data} = useQuery({
            queryKey: ['movies'],
            queryFn: getMovies
        })
  return (
    <FlatList
      data={data}
      horizontal
      ItemSeparatorComponent={() => <View style={{marginRight: 30}} />}
      renderItem={({ item }) => (
        <View style={styles.containerMoview}>
            <View style={styles.containerImg}>
            <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
            }}
            style={styles.imgPoster}
            />
            </View>
           <View style={styles.containerDescription}> 
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.release_date}</Text>
           </View>
         

        </View>
      )}
    />
  );
};
