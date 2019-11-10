import {Dimensions, StyleSheet} from 'react-native';
import {widthPercentage as wp} from '../util';

module.exports = StyleSheet.create({
    container: {
        marginLeft: wp(23),
        marginRight: wp(23),
    },
    content: {
        backgroundColor: '#FFFFFF',
        paddingLeft: wp(23),
        paddingRight: wp(23),
        borderRadius: wp(25),
        paddingTop: wp(45),
        paddingBottom: wp(30)
    },
    btnCloseModal: {
        position: 'absolute',
        top: wp(23.7),
        right: wp(20.1)
    },
    iconClose: {
        width: wp(14),
        height: wp(14),
    },
    btnGroup: {
        marginTop: wp(12),
    },
    btnBox: {
        marginTop: wp(12),
        width: wp(300),
        alignSelf: 'center',
        backgroundColor: '#35d3b9',
        alignItems: 'center',
        justifyContent: 'center',
        height: wp(38),
        borderRadius: wp(35)
    },
    btnTxt: {
        color: "#ffffff",
        fontSize: wp(14),
        fontFamily: "Raleway-SemiBold",
    },
});
