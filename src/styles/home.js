import {StyleSheet} from 'react-native';
import {widthPercentage as wp} from '../util';

module.exports = StyleSheet.create({

    rootWrapper: {
        flex: 1
    },

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    contentWrapper: {
    },

    addressInfo: {
        width: wp(303),
        alignSelf: 'center',
        backgroundColor: '#e2e2e2',
        borderBottomRightRadius: wp(28),
        borderBottomLeftRadius: wp(28),
        paddingLeft: wp(14),
        paddingRight: wp(14),
        alignItems: 'center',
        paddingTop: wp(16),
        paddingBottom: wp(9),
    },

    addressInfoTxt: {
        color: "#3d3d3d",
        fontSize: wp(11),
        fontFamily: "Rubik-Regular",
        textAlign: 'center'
    },

    titleWrapper: {
        height: wp(15),
    },

    titleTxt: {
        color: "#3d3d3d",
        fontSize: wp(19),
        fontFamily: "Raleway-Bold",
    },
    titleSaleTxt: {
        letterSpacing: wp(2),
    },

    typesWrapper: {
        flexDirection: 'column',
        paddingLeft: wp(16),
        paddingRight: wp(16),
        marginTop: wp(14),
        paddingBottom: wp(100)
    },
});
