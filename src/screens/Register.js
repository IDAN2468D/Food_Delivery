//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import LayoutScreen from './LayoutScreen';
import { FromInput, Button, FacebookButton, GoogleButton } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import { Colors, Fonts } from '../StyleGuide';
import { utils } from '../utils';

const windowHeight = Dimensions.get('window').height;

// create a component
const Register = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPss, setShowPss] = useState(false);


    function isEnableSignInEmail() {
        return email != "" && emailError == "" && password != "" && passwordError == ""
    }

    return (
        <LayoutScreen
            headerTitle="Register"
            title="Create Account"
            subtitle="Enter your Name, Email and password for Register."
            LogIn="Already have account"
        >
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
                    value={email}
                    errorMsg={emailError}
                    placeholder='Email'
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
                                <FontAwesome name='envelope-o' size={25} color={Colors.DEFAULT_BLACK} />
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
                <Button
                    buttonText='Register'
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        marginHorizontal: 20,
                        marginTop: 30,
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
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, }}>OR</Text>
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
                </View>
                <GoogleButton
                    buttonText='Connect With Google'
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: "center",
                        marginHorizontal: 20,
                        marginBottom: 20,
                        paddingVertical: 10,
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
    ContainerSocial: {
        paddingVertical: 6,
    }
});

//make this component available to the app
export default Register;
