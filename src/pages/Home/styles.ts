import {StyleSheet, Platform} from 'react-native'
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 50,
        alignItems: 'center',
    },
    header: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    titleHeader:{
        fontSize: 25,
        fontFamily: theme.fonts.bold,
        color: theme.colors.colorYellow
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.bold,
        color: theme.colors.colorWhite
    },
    containerMoviesAndSeries: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 15,
        gap: 25,
        justifyContent: 'flex-start',
       
    },
  
});