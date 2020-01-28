import {StyleSheet} from 'react-native';
import {widthPercentage as wp} from '../util';

module.exports = StyleSheet.create({
    contentWrapper: {
        backgroundColor: '#ffffff',
        shadowOpacity: 0.16,
        width: '100%',
        shadowRadius: wp(6),
        shadowColor: '#000000',
        shadowOffset: {height: wp(3), width: 0},
        elevation: 6,
        marginBottom: wp(10)
    },
    feedContent: {
        flex: 1,
    },
    userInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: wp(10),
        paddingLeft: wp(10)
    },
    thumbnail: {
        width: wp(35),
        height: wp(35),
        borderRadius: wp(15),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbImage: {
        width: wp(35),
        height: wp(35),
        borderRadius: wp(35/2),
    },
    userInfo: {
        paddingLeft: wp(15)
    },
    usernameTxt: {
        fontSize: wp(13),
        fontFamily: "Raleway-Bold",
    },
    timeAgoTxt: {
        color: '#3D3D3D',
        fontSize: wp(10),
        fontFamily: "Raleway-Medium",
    },
    descWrapper: {
        paddingLeft: wp(10),
        paddingRight: wp(50),
        paddingTop: wp(12),
        paddingBottom: wp(15),
    },
    professionView: {
        paddingBottom: wp(10)
    },
    professionTxt: {
        color: "#3D3D3D",
        fontSize: wp(12),
        fontFamily: "Roboto-Regular",
    },
    professionTxtBold: {
        color: "#000000",
        fontSize: wp(12),
        fontFamily: "Roboto-Bold",
    },
    professionDesc: {
        color: "#3D3D3D",
        fontSize: wp(12),
        fontFamily: "Roboto-Regular",
    },
    btnChat: {
        backgroundColor: '#02C8A7',
        height: wp(25),
        width: wp(100),
        borderRadius: wp(19),
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnChatTxt: {
        color: "#ffffff",
        fontSize: wp(12),
        fontFamily: "Raleway-SemiBold",
    },
});
