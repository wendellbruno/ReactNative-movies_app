import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {styles} from './styles';
import Ellipse1 from '../../assets/Ellipse1.png';
import Ellipse2 from '../../assets/Ellipse2.png';
import { teste } from '../../services';
export const Home: React.FC = () => {

    teste();
  return (
    <View  style={styles.container}>
        <StatusBar style='auto' />

        <View style={styles.containerEllipses}>
        <Image source={Ellipse2} style={styles.ellipseTop}/>
        <Image source={Ellipse1} style={styles.ellipseBottom}/>
        </View>
    </View>
  )
}
