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
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.bold,
        color: theme.colors.colorWhite
    },
    containerNewsMovies: {
        flex: 1,
        width: '100%',
        paddingTop: 10,
        paddingLeft: 38,
        gap: 25,
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'white'
    },
    containerFavorites: {
        flex: 1,
        width: '80%',
        borderWidth: 1,
        borderColor: 'white'
    }
});