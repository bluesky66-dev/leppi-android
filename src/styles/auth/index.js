import { StyleSheet } from 'react-native';
import {widthPercentage as wp } from '../../util';

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#02C8A7",
  },

  containerScroll: {
    flex: 1
  },

  startBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp(22),
    flexDirection: 'row',
  },

  welcomeText: {
    fontWeight: "400",
    fontFamily: "Raleway-Bold",
    fontSize: wp(32),
    color: "#ffffff",
    textAlign: "center",
    marginLeft: wp(6),
    marginRight: wp(20),
  },

  logoCotainer: {
    alignSelf: "center",
  },

  logoimage: {
    alignSelf: "flex-start",
    width: wp(56),
    height: wp(56),
  },

  btnContainer: {
    borderRadius: wp(14),
    marginTop: wp(10),
  },

  button: {
    height: wp(36),
    width: wp(162),
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: wp(12),
    borderBottomLeftRadius: wp(39),
    borderTopRightRadius: wp(39),
    borderBottomRightRadius: wp(12)
  },

  buttonText: {
    fontFamily: "Raleway-Bold",
    fontSize: wp(18),
    color: "#02C8A7",
  },

  bordered: {
    borderWidth: wp(3),
    color: "#fff",
    borderColor: "#FFFFFF",
    backgroundColor: "#02C8A7",
  },

  mainColor: {
    color: "#FFFFFF",
  },

  btnLogin: {
  },

  btnRegister: {
  },

  loginButtonText: {
    fontFamily: "Raleway-Bold",
    fontSize: wp(18),
    color: "#3D3D3D",
  },

  registerButtonText: {
    fontFamily: "Raleway-Bold",
    fontSize: wp(18),
    color: "#02C8A7",
  },
});
