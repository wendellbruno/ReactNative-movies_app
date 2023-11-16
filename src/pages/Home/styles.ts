import {StyleSheet} from 'react-native'
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerEllipses:{
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'red'
    },
    ellipseTop: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 308,
        height: 308,
        resizeMode: 'stretch',
    },
    ellipseBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 308,
        height: 308,
        resizeMode: 'stretch'
    }

});