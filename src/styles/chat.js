import {StyleSheet} from 'react-native';
import {widthPercentage as wp} from '../util';

module.exports = StyleSheet.create({
    rootWrapper: {
        flex: 1,
    },
    container: {
    },
    contentWrapper: {
        backgroundColor: '#FFFFFF',
        paddingLeft: wp(24),
        paddingRight: wp(24),
    },

    height44: {
        height:wp(30),
    },

    height56: {
        height:wp(106),
    }
});
