import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StaticImageService } from '../services';
import { Colors, Fonts } from '../StyleGuide';



const FlagItem = ({ name, code, dial_code, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress({ code, name, dial_code })}>
            <Image style={styles.flagImage} source={{ uri: StaticImageService.getFlagIcon(code) }} />
            <Text style={styles.flagText}>{dial_code}</Text>
            <Text style={styles.flagText}>{name}</Text>
        </TouchableOpacity>
    )
}

export default FlagItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row-reverse",
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    flagImage: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    flagText: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.Poppins_Medium,
        marginRight: 10,
    }
})