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
        marginTop: wp(38),
        paddingLeft: wp(54),
        paddingRight: wp(54)
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: wp(33),
        paddingRight: wp(32),
        marginTop: wp(14),
    },

    isSelected: {
        borderRadius: wp(8),
        backgroundColor: '#e2e2e2'
    },

    typeBox: {
        width: wp(103),
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

    buttonGroup: {
        height: wp(62)
    },

    sellButton: {
        marginBottom: wp(18)
    },

    buttonOut: {
        width: wp(310),
        height: wp(55),
        backgroundColor: '#ffffff',
        borderRadius: wp(35),
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonIn: {
        width: wp(302),
        height: wp(49),
        borderRadius: wp(35),
        borderWidth: wp(1),
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonInRed: {
        borderColor: '#f63341',
    },

    buttonInBlue: {
        borderColor: '#1c5596',
    },

    buttonTxt: {
        color: "#3d3d3d",
        fontSize: wp(18),
        fontFamily: "Raleway-Bold",
    },

    btnBadge: {
        width: wp(55),
        height: wp(17),
        borderRadius: wp(35),
        alignSelf: 'center',
        position: 'absolute',
        top: wp(-7),
    },

    badgeRed: {
        backgroundColor: '#f63341',
    },

    badgeBlue: {
        backgroundColor: '#1c5596',
    },

    solicitationButton: {},
});
