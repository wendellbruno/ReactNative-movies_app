import {StyleSheet, Platform} from 'react-native'
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerHeader:{
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styledIcon:{
        color: theme.colors.colorYellow,
        fontSize: 60
    },
    containerList:{
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCard:{
    height: 122,
    width: 330,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    gap: 10,
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: 'rgba(129,129,129,0.3)',
    },
    containerImgMovie: {
        width: 67,
        height: 90,
        borderRadius: 10,
        overflow: 'hidden'
    },
    imgMovie:{
        width: 67,
        height: 90,
        resizeMode: 'cover',
    },
    containerDetail:{
        maxWidth: '70%',
        gap: 5,
       
    },
    titleDetail:{
      fontSize: 14,
      fontFamily: theme.fonts.bold,
      color: theme.colors.colorWhite
    },
    subtileDetail:{
        fontSize: 12,
        fontFamily: theme.fonts.regular,
        color: theme.colors.colorGray
    },
    containerAvarege: {
        width: 34,
        height: 50,
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.colorYellow,
        position: 'absolute',
        top: 0,
        right: 0,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    }
});