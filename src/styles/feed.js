import {StyleSheet} from 'react-native';
import {widthPercentage as wp} from '../util';

module.exports = StyleSheet.create({

    rootWrapper: {
        flex: 1,
    },

    container: {
        flex: 1,
    },

    contentWrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: wp(23),
        paddingRight: wp(23),
    },

    height13: {
        height:wp(13),
    },

    height44: {
        height:wp(44),
    }
});
