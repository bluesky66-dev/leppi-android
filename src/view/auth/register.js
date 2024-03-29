import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as authActions from '../../redux/actions/AuthActions'; //Import your actions
import {CredentialsForm, InformationForm, LocationForm, ProfessionForm, UserOptionsForm} from "../../components/forms";
import {AppTopSection, RegisterButton} from "../../components/start";
import styles from "../../styles/auth/auth";
import {ScrollView, View} from "react-native";
import Toast from 'react-native-simple-toast';
import Swiper from '../../components/swiper';
import * as utils from '../../util';
import {widthPercentage as wp} from '../../util';
import {listenOrientationChange as lor, removeOrientationListener as rol} from 'react-native-responsive-screen';
import Spinner from "react-native-loading-spinner-overlay";
import * as EmailValidator from "email-validator/index";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step_index: 1,
            userMeta: {},
            callingCode: '',
        };
        this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
        this._onNextStep = this._onNextStep.bind(this);
        this._onBackPress = this._onBackPress.bind(this);
        this._onChangeState = this._onChangeState.bind(this);
    }

    componentDidMount() {
        lor(this);
    }

    componentWillUnmount() {
        rol();
    }

    _onMomentumScrollEnd(e, state, context) {
        // //console.log('step_index === ', state.index);
        let step_index = state.index * 1 + 1;
        this.setState({step_index: step_index});
    }

    async _onNextStep() {
        const {navigate} = this.props.navigation;
        let state = this.state;
        switch (this.state.step_index) {
            case 1:
                if (!state.country || state.district.length <= 0) {
                    Toast.show('Digite sua Rua', Toast.SHORT);
                    return false;
                }
                let callingCode =  utils.getCallingCode(state.cca2);
                this.setState({callingCode: callingCode});

                break;
            case 2:
                if (!state.avatar || state.avatar.length <= 0) {
                    Toast.show('Select your avatar', Toast.SHORT);
                    return false;
                }
                if (!state.first_name || state.first_name.length <= 0) {
                    Toast.show('Enter your first name', Toast.SHORT);
                    return false;
                }
                if (!state.last_name || state.last_name.length <= 0) {
                    Toast.show('Enter your last name', Toast.SHORT);
                    return false;
                }
                if (!state.whatsapp || state.whatsapp.length <= 0) {
                    Toast.show('Enter your whatsapp', Toast.SHORT);
                    return false;
                }

                break;
            case 3:
                if (!state.email || state.email.length <= 0) {
                    Toast.show('Enter your email', Toast.SHORT);
                    return false;
                }
                if (!EmailValidator.validate(state.email)) {
                    Toast.show('Invalid email address!', Toast.SHORT);
                    return false;
                }
                if (!state.password || state.password.length <= 0) {
                    Toast.show('Enter password', Toast.SHORT);
                    return false;
                }
                if (state.password.length <= 7) {
                    Toast.show('Use 8 characters or more for your password', Toast.SHORT);
                    return false;
                }
                if (!state.confirm_pass || state.confirm_pass !== state.password) {
                    Toast.show('Those passwords didn\'t match', Toast.SHORT);
                    return false;
                }
                break;
            case 4:
                if (!state.profession || state.profession.length <= 0) {
                    Toast.show('Digite sua profissão', Toast.SHORT);
                    return false;
                }
                break;
            case 5:
                if (!state.user_options || state.user_options.length < 3) {
                    Toast.show('You must select at least 3 options to proceed', Toast.SHORT);
                    return false;
                }

                const userMeta = {
                    address: state.address,
                    city: state.city,
                    street: state.street,
                    district: state.district,
                    country: state.country,
                    cca2: state.cca2,
                    location: state.location,
                    first_name: state.first_name,
                    last_name: state.last_name,
                    whatsapp: state.whatsapp.replace(/\D/g,''),
                    birth_date: state.birth_date,
                    profession: state.profession,
                    profession_desc: state.profession_desc,
                    user_options: state.user_options,
                    avatar: state.avatar,
                    points: 0,
                    createTime: Math.floor(Date.now()),
                };
                await this.props.fetchSignup(state, userMeta);
                break;
        }
        let step_index = this.state.step_index + 1;
        if (step_index >= 6) {
            // navigate('Welcome');
        } else if (step_index < 6) {
            this.refs.swiper.scrollBy(1);
        }
    }

    _onBackPress = () => {
        let step_index = this.state.step_index - 1;
        if (step_index > 0) {
            this.refs.swiper.scrollBy(-1);
        } else {
            this.props.navigation.goBack();
        }
    }


    _onChangeState(state) {
        state = Object.assign({}, this.state, state);
        this.setState(state);
    }

    render() {
        let swiperStyle = {};
        swiperStyle.height = wp(384);
        let title = "Próximo";
        switch (this.state.step_index) {
            case 1:
                swiperStyle.height = wp(384);
                break;
            case 2:
                swiperStyle.height = wp(384);
                break;
            case 3:
                swiperStyle.height = wp(384);
                break;
            case 4:
                swiperStyle.height = wp(384);
                break;
            case 5:
                swiperStyle.height = wp(552);
                title = "Enviar";
                break;
        }
        return (
            <View style={styles.rootWrapper}>
                <Spinner
                    visible={this.props.isLoading}
                    textContent={''}
                    textStyle={{color: '#FFF'}}
                />
                <ScrollView style={styles.rootWrapper}>
                    <AppTopSection authStep={this.state.step_index} onBackPress={this._onBackPress}/>
                    <Swiper ref={'swiper'}
                            index={this.state.step_index - 1}
                            scrollEnabled={false}
                            showsPagination={false}
                            onMomentumScrollEnd={this._onMomentumScrollEnd}
                            loop={false} style={swiperStyle}>
                        <View style={styles.swiperSlide}>
                            <LocationForm onChange={this._onChangeState}/>
                        </View>
                        <View style={styles.swiperSlide}>
                            <InformationForm callingCode={this.state.callingCode} onChange={this._onChangeState}/>
                        </View>
                        <View style={styles.swiperSlide}>
                            <CredentialsForm  onChange={this._onChangeState}/>
                        </View>
                        <View style={styles.swiperSlide}>
                            <ProfessionForm  onChange={this._onChangeState}/>
                        </View>
                        <View style={styles.swiperSlide}>
                            <UserOptionsForm  onChange={this._onChangeState}/>
                        </View>
                    </Swiper>
                    <View style={styles.registerBtnWrapper}>
                        <RegisterButton authStep={this.state.step_index} style={styles.nextStepBtn}
                                        onPress={()=>this._onNextStep()} btnText={title}/>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

function mapStateToProps(state, props) {
    return {
        currentLocation: state.AuthReducer.currentLocation,
        userMeta: state.AuthReducer.userMeta,
        userId: state.AuthReducer.userId,
        isLoading: Boolean(state.AuthReducer.isLoading),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSignup: (data, userMeta) => dispatch(authActions.fetchSignup(data, userMeta)),
        uploadMedia: (media) => dispatch(authActions.uploadMedia(media)),
        createUserMeta: (metaData) => dispatch(authActions.createUserMeta(metaData)),
        setUserMeta: (metaData) => dispatch(authActions.setUserMeta(metaData)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
