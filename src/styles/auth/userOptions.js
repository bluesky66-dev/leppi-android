import {StyleSheet} from 'react-native';
import {widthPercentage as wp} from '../../util';


module.exports = StyleSheet.create({
    formWrapper: {
        marginTop: wp(30),
        flex: 1,
    },
    formContainer: {
        paddingLeft: wp(42),
        paddingRight: wp(41)
    },
    descTxt: {
        color: "#ffffff",
        textAlign: 'center',
        fontSize: wp(14),
        fontFamily: "Raleway-SemiBold",
        marginBottom: wp(12)
    },
    optionsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: wp(18)
    },
    optionItem: {
        width: wp(95),
        paddingLeft: wp(3),
        paddingRight: wp(3),
        justifyContent: 'center'
    },
    optionTxt: {
        color: "#000000",
        textAlign: 'center',
        fontSize: wp(12),
        fontFamily: "Raleway-SemiBold",
        marginBottom: wp(22)
    },
    optionTxtActive: {
        color: "#ffffff",
    }
});
