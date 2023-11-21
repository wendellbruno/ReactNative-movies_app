import {StyleSheet} from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerimg:{
        flex: 1,
        width: '100%',
        height: 300
    },
    image:{
        flex:1
    },
    containerDetail:{
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        padding: 20,
        gap: 15,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'rgba(13,7,7,0.7)',
    },
    containerHeaderDetail:{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title:{
      fontSize: 24,
      fontFamily: theme.fonts.bold,
      color: theme.colors.colorWhite
    },
    containerAverage:{
        flexDirection: 'row',
        gap: 5
    },
    iconDetailStar: {
        fontSize: 24,
        color: theme.colors.colorYellow
    },
    textVoteAverage:{
        fontSize: 24,
        color: theme.colors.colorYellow
    },
    overview:{
        fontSize: 16,
        fontFamily: theme.fonts.medium,
        color: theme.colors.colorWhite
    }
})