import {StyleSheet} from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 99
    },
    arrowButton:{
        fontSize: 40,
        color: theme.colors.colorYellow
    }
});