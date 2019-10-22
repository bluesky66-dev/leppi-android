import {StyleSheet} from 'react-native';
import {widthPercentage as wp, heightPercentage as hp} from '../../util';

module.exports = StyleSheet.create({
    backIcon: {
        position: "absolute",
        top: hp(25),
        left: wp(28),
        width: hp(22),
        height: hp(20),
        backgroundColor: 'transparent',
        zIndex: 3,
    },

    backIconStyle: {
        width: hp(22),
        height: hp(20),
        resizeMode: 'stretch',
    },
});
