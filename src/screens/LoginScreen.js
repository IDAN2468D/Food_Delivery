//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { FromInput, Button, FacebookButton, GoogleButton } from '../components';
import { LayoutScreen } from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Colors, Fonts } from '../StyleGuide';
import { utils } from '../utils';
import AuthenticationRegister from '../components/AuthenticationRegister';


// create a component
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPss, setShowPss] = useState(false);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    function isEnableSignInEmail() {
        return email != "" && emailError == "" && password != "" && passwordError == ""
    }

    return (
        <LayoutScreen
            headerTitle="Log In"
            title="Welcome to"
            subtitle="Enter your Phone number or Email address for Log in. Enjoy your food.">
            <View style={styles.container}>
                <FromInput
                    value={email}
                    errorMsg={emailError}
                    placeholder='Username'
                    onChangeText={(text) => setEmail(text)}
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    inputStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    IconsComponent={
                        <View style={{
                            flexDirection: "row",
                            alignItems: 'center',
                        }}
                        >
                            <TouchableOpacity>
                                <AntDesign name='user' size={25} color={Colors.DEFAULT_BLACK} />
                            </TouchableOpacity>
                        </View>
                    }
                />
                <FromInput
                    value={password}
                    placeholder='Password'
                    secureTextEntry={!showPss}
                    errorMsg={passwordError}
                    onChangeText={(text) => setPassword(text)}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    inputStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    IconsComponent={
                        <View style={{
                            flexDirection: "row",
                            alignItems: 'center',
                        }}
                        >
                            <TouchableOpacity>
                                <Feather name='lock' size={25} color={Colors.DARK_ONE} />
                            </TouchableOpacity>
                        </View>
                    }
                    prependComponent={
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                            }}
                        >
                            <TouchableOpacity onPress={() => setShowPss(!showPss)} style={{ justifyContent: 'center', }}>
                                <Ionicons name={showPss === false ? "eye-off" : "eye"} size={20} color={Colors.FACEBOOK_BLUE} />
                            </TouchableOpacity>
                        </View>
                    }
                />
                <View style={styles.ToggleContainer}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate("ForgetPassword")}>
                        <Text style={styles.TitleForgetPassword}>ForgetPassword</Text>
                    </TouchableNativeFeedback>
                    <ToggleSwitch
                        isOn={isEnabled}
                        onColor={Colors.DEFAULT_GREEN}
                        offColor="#f4f3f4"
                        label="Remember Me"
                        labelStyle={{ color: Colors.INACTIVE_GREY, fontWeight: "500" }}
                        size="medium"
                        onToggle={toggleSwitch}
                    />
                </View>
                <Button
                    buttonText='Log in'
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        marginHorizontal: 20,
                        paddingVertical: 20,
                        borderRadius: 15,
                        backgroundColor: isEnableSignInEmail() ? Colors.DEFAULT_GREEN : Colors.FACEBOOK_BLUE,
                    }}
                    StyleText={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                />
            </View>
            <View style={styles.ContainerRegister}>
                <AuthenticationRegister
                    Register="Register"
                    Phone="Phone"
                    navigation={navigation}
                />
                <Text>OR</Text>
            </View>
            <View style={styles.ContainerSocial}>
                <FacebookButton
                    buttonText='Connect With Facebook'
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 20,
                        marginBottom: 15,
                        paddingVertical: 10,
                        borderRadius: 15,
                        backgroundColor: Colors.FACEBOOK_BLUE,
                    }}
                    StyleText={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                    ContainerIcon={{
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        borderRadius: 10,
                        backgroundColor: Colors.DEFAULT_WHITE,
                        left: 65
                    }}
                    StyleIcons={{
                        width: 20,
                        height: 20,
                    }}
                />
                <GoogleButton
                    buttonText='Connect With Google'
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: "center",
                        marginHorizontal: 20,
                        paddingVertical: 10,
                        marginBottom: 40,
                        borderRadius: 15,
                        backgroundColor: Colors.GOOGLE_BLUE,
                    }}
                    StyleText={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                    ContainerIcon={{
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        borderRadius: 10,
                        backgroundColor: Colors.DEFAULT_WHITE,
                        left: 75
                    }}
                    StyleIcons={{
                        width: 20,
                        height: 20,
                    }}
                />
            </View>
        </LayoutScreen>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ToggleContainer: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    TitleForgetPassword: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.DEFAULT_GREEN,
    },
    ContainerRegister: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    ContainerSocial: {
        paddingVertical: 6
    }
});

//make this component available to the app
export default LoginScreen;
