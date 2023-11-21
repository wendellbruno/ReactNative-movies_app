import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import {useQuery} from 'react-query';
import { getTvSeries } from "../../services";
import {AntDesign} from '@expo/vector-icons';
import {useRootesHook} from '../../hooks';

export const ListNewSeriesTv: React.FC = () => {

  const {navigate} = useRootesHook();
  
    const {data} = useQuery({
            queryKey: ['series'],
            queryFn: getTvSeries
        })

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{marginRight: 30}} />}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={() => navigate('Detail', {data: item, type: 'tv'})}
        >
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
            <Text style={styles.title}>{item.name}</Text>
           </View>
            <View style={styles.containerAvarege}>
                <Text>{item.vote_average.toFixed(1)}</Text>
                <AntDesign name="star" />
            </View>

        </View>
        </TouchableOpacity>

      )}
    />
  );
};
