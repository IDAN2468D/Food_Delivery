//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Display } from '../utils';
import { Fonts, Colors, Images } from '../StyleGuide';

// create a component
const WelcomeCard = ({ title, content, image }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images[image]} resizeMode="contain" />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{content}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Display.setWidth(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: Display.setHeight(30),
        width: Display.setWidth(60),
    },
    titleText: {
        fontSize: 22,
        fontFamily: Fonts.Poppins_ExtraBold,
        color: Colors.DEFAULT_BLACK,
    },
    contentText: {
        fontSize: 18,
        fontFamily: Fonts.Poppins_Light,
        textAlign: "center",
        marginHorizontal: 20,
    }
});

export default WelcomeCard;
