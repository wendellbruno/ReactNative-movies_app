import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useQuery } from 'react-query';
import { getMoviesDiscover } from '../../services';
import { LinearGradient } from 'expo-linear-gradient';


import { styles } from './styles';

export const ListMovies: React.FC = () => {

  const {data}= useQuery({
    queryKey: ['MovieDiscover'],
    queryFn: getMoviesDiscover
  })
  return (
    <>
    <View style={styles.containerHeader}></View>
    <FlatList
    data={data}
    renderItem={({item }) => (
      <View style={styles.container}>
        <LinearGradient
        colors={['#818181', 'transparent']}
        >
        <Text>{item.title}</Text>
        </LinearGradient>

      </View>
    )}
    />
    </>
  )
}
