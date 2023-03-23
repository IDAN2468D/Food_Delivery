import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Separator from '../components/Separator'
import { Colors, Fonts } from '../StyleGuide';

const LayoutScreen = ({ title, subtitle, children, LogIn, headerTitle, phoneNumber }) => {
    const navigation = useNavigation();

    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: Colors.DEFAULT_WHITE }}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{headerTitle}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{subtitle}
                <TouchableNativeFeedback onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: Colors.DEFAULT_GREEN }}>{LogIn}</Text>
                </TouchableNativeFeedback>
                <Text style={styles.phoneNumber}> {phoneNumber}</Text>
            </Text>
            {children}
        </KeyboardAwareScrollView>
    )
}

export default LayoutScreen;

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 30,
        fontFamily: Fonts.Poppins_Medium,
        textAlign: "center",
        color: Colors.DEFAULT_BLACK,
    },
    title: {
        color: Colors.DEFAULT_BLACK,
        fontSize: 20,
        fontFamily: Fonts.Poppins_Bold,
        lineHeight: 20 * 1.4,
        marginTop: 30,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    content: {
        color: Colors.DEFAULT_BLACK,
        fontSize: 16,
        fontFamily: Fonts.Poppins_Light,
        marginTop: 10,
        marginHorizontal: 20,
    },
    phoneNumber: {
        fontSize: 18,
        fontFamily: Fonts.Poppins_Regular,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_YELLOW,
    }
})