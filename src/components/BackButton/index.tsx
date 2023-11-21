import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {styles} from './styles';
import {useRootesHook} from '../../hooks'

export const BackButton: React.FC = () => {
    const {goBack} = useRootesHook();
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={() => goBack()}
    >
    <View>
        <Feather name='arrow-left-circle' style={styles.arrowButton} />
    </View>
    </TouchableOpacity>
  );
}
