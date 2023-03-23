//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FromInput, Button } from '../components';
import { LayoutScreen } from '../screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors, Fonts } from '../StyleGuide';
import { utils } from '../utils';

const windowHeight = Dimensions.get('window').height;

// create a component
const ForgetPassword = () => {
    const [email, setEmail] = useState(null);
    const [emailError, setEmailError] = useState("");

    function isEnableSignInEmail() {
        return email != "" && emailError == ""
    }

    return (
        <LayoutScreen
            headerTitle="Forget Password"
            title="Forget Password"
            subtitle="Please Your Email So We Can Help You Recover Password"
        >
            <View style={styles.container}>
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
                <Button
                    buttonText='Reset Password'
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        marginHorizontal: 20,
                        marginVertical: 40,
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
        </LayoutScreen>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 575,
    },
});

//make this component available to the app
export default ForgetPassword;
