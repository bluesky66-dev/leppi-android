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
        marginTop: wp(20),
        paddingLeft: wp(40),
        paddingRight: wp(40),
    },

    titleTxt: {
        color: "#3d3d3d",
        fontSize: wp(14),
        fontFamily: "Raleway-Bold",
    },
    titleSaleTxt: {
        letterSpacing: wp(2),
    },

    typesWrapper: {
        flexDirection: 'column',
        paddingLeft: wp(33),
        paddingRight: wp(33),
        marginTop: wp(14),
        paddingBottom: wp(50)
    },
    typesBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: wp(33),
        paddingRight: wp(15),
        marginTop: wp(14),
        paddingBottom: wp(15)
    },

    isSelected: {
        borderRadius: wp(8),
        backgroundColor: '#e2e2e2'
    },

    typeBox: {
        width: wp(90),
        marginRight: wp(15),
        height: wp(80),
        backgroundColor: '#ffffff',
        borderRadius: wp(8),
        marginBottom: wp(9),
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp(5)
    },

    typeIcon: {
        width: wp(34),
        height: wp(33),
        marginBottom: wp(8)
    },

    typeTxt: {
        color: "#3d3d3d",
        fontSize: wp(10),
        fontFamily: "Rubik-Regular",
        textAlign: 'center',
    },
});
