import {StyleSheet} from 'react-native';
import {widthPercentage as wp, heightPercentage as hp} from '../../util';

module.exports = StyleSheet.create({

    contentWrapper: {
        paddingBottom: hp(35),
        marginBottom: hp(80),
    },

    appHeader: {
        width: '100%',
        height: hp(70),
        backgroundColor: '#35d3b9',
        marginBottom: hp(40),
        zIndex: 2
    },

    headerRound: {
        position: 'absolute',
        top: wp(-275),
        width: wp(375),
        height: wp(375),
        backgroundColor: '#35d3b9',
        borderRadius: wp(188),
        transform: [
            {scaleX: 1.5}
        ],
        zIndex: 1
    },

    headerText: {
        position: 'absolute',
        alignSelf: "center",
        top: hp(22),
        fontWeight: "400",
        fontFamily: "Raleway-Bold",
        fontSize: hp(46),
        color: "#ffffff",
        textAlign: "center",
        opacity: 0.2,
    },

    logoBox: {
        position: 'absolute',
        top: hp(59),
        alignSelf: "center",
        width: hp(177),
        height: hp(148),
    },

    headerLogo: {
        alignSelf: "flex-start",
        width: hp(148),
        height: hp(148),
    },

    stepTitleWrapper: {
        flex: 1,
        zIndex: 2
    },

    stepTitle: {
        alignSelf: "center",
        fontWeight: "400",
        fontFamily: "Raleway-Bold",
        color: "#ffffff",
        fontSize: hp(17),
    },

    stepDot0: {
        display: "none"
    },

    stepDot1: {
        width: hp(14),
        height: hp(14),
        zIndex: 2,
        backgroundColor: '#ffffff',
        borderRadius: hp(7),
        left: wp(25),
        top: wp(-16),
    },

    stepDot2: {
        width: hp(14),
        height: hp(14),
        zIndex: 2,
        backgroundColor: '#ffffff',
        borderRadius: hp(7),
        left: wp(129),
        top: wp(12),
    },

    stepDot3: {
        width: hp(14),
        height: hp(14),
        zIndex: 2,
        backgroundColor: "#ffffff",
        borderRadius: hp(7),
        left: wp(234),
        top: wp(12),
    },

    stepDot4: {
        width: hp(14),
        height: hp(14),
        zIndex: 2,
        backgroundColor: "#ffffff",
        borderRadius: hp(7),
        left: wp(338),
        top: wp(-16),
    },
});
