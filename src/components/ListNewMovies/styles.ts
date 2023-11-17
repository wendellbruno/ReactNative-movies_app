import {StyleSheet} from 'react-native'
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    containerMoview: {
        height: 300,
        width: 155,
        gap: 15,
    },
    containerImg: {
        width: 150,
        height: 225,
        overflow: 'hidden',
        borderRadius: 25,
    },
    imgPoster:{
        width: 150,
        height: 225,
        resizeMode: 'cover',
    },
    containerDescription: {
        gap: 2
    },
    title: {
        fontFamily: theme.fonts.bold,
        fontSize: 14,
        color: theme.colors.colorWhite
    },
    subtitle:{
        fontFamily: theme.fonts.regular,
        fontSize: 10,
        color: theme.colors.colorGray
    }
});