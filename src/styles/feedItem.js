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
    iconDot: {
        position: "absolute",
        top: wp(7),
        right: wp(15),
        width: wp(22),
        height: wp(22),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    iconDotStyle: {
        width: wp(22),
        height: wp(22),
        resizeMode: 'contain',
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
        paddingLeft: wp(60),
        paddingRight: wp(50),
        paddingTop: wp(12),
        paddingBottom: wp(15),
    },
    descTxt: {
        color: "#000000",
        fontSize: wp(11),
        fontFamily: "Raleway-Bold",
        marginBottom: wp(2),
    },
    galleryRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    galleryItemView: {
        marginRight: wp(8)
    },
    galleryItem: {
        width: wp(55),
        height: wp(55),
        borderRadius: wp(8),
        marginTop: wp(10)
    },
    otherViewRow: {
        marginTop: wp(10),
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        position: 'relative'
    },
    otherTxts: {
        color: "#3D3D3D",
        fontSize: wp(10),
        fontFamily: "Raleway-Medium",
        marginLeft: wp(5)
    },
    priceTxt: {
        color: "#3D3D3D",
        fontSize: wp(10),
        fontFamily: "Raleway-Medium",
        alignContent: 'flex-end',
        position: 'absolute',
        right: 0,
    },
    iconLocation: {
        width: wp(7),
        height: wp(10),
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: wp(10),
        paddingBottom: wp(10),
    },
    tagItem: {
        backgroundColor: '#02C8A7',
        padding: 5,
        borderRadius: 12,
        marginBottom: 5,
        marginRight: 5
    },
    tagItemText: {
        color: "#ffffff",
        fontSize: wp(11),
        fontFamily: "Raleway-Regular",
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
