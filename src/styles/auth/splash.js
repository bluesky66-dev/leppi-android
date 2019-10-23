import {StyleSheet} from 'react-native';
import {widthPercentage as wp, heightPercentage as hp} from '../../util';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: "#02C8A7",
      },
    
    welcomeText: {
        marginTop: wp(215),
        fontWeight: "400",
        fontFamily: "Raleway-Bold",
        fontSize: wp(64),
        color: "#ffffff",
        textAlign: "center"
    },

    logoimage: {
        position: 'absolute',
        bottom: 0,
        left: wp(-110),
        width: wp(512),
        height: wp(512),
    },
});
