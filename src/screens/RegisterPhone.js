//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, LogBox } from 'react-native';
import LayoutScreen from './LayoutScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, CountryCode, Fonts } from '../StyleGuide';
import { Display } from '../utils';
import { StaticImageService } from '../services';
import { Button, FlagItem } from '../components';

const getDropdownStyle = y => ({ ...styles.countryDropdown, bottom: y + 10 })

// create a component
const RegisterPhone = ({ navigation }) => {
    const [inputsContainerY, setInputsContainerY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownLayout, setDropdownLayout] = useState({});
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(
        CountryCode.find(country => country.name === "India")
    );

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])


    const closeDropdown = (pageX, pageY) => {
        if (isDropdownOpen) {
            if (pageX < dropdownLayout?.x ||
                pageX > dropdownLayout?.x + dropdownLayout?.width ||
                pageY < dropdownLayout?.x ||
                pageY > dropdownLayout?.y + dropdownLayout?.height) {
                setIsDropdownOpen(false);
            }
        }
    }

    return (
        <LayoutScreen
            title="RegisterPhone"
            headerTitle="Register Phone"
            subtitle="Enter your registered phone number to login."
        >
            <View style={styles.container} onStartShouldSetResponder={({ nativeEvent: { layout: pageX, pageY, } }) => closeDropdown(pageX, pageY)}>
                <View style={styles.inputContainer} onLayout={({ nativeEvent: { layout: { y } } }) => setInputsContainerY(y)}>
                    <TouchableOpacity style={styles.countryListContainer} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <MaterialIcons name={isDropdownOpen ? 'keyboard-arrow-up' : "keyboard-arrow-down"} size={18} />
                        <Text style={styles.countryCodeText}>{selectedCountry.dial_code}</Text>
                        <Image
                            source={{ uri: StaticImageService.getFlagIcon(selectedCountry.code) }}
                            style={styles.flatIcon}
                        />
                    </TouchableOpacity>
                    <View style={styles.phoneInputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Phone Number'
                            placeholderTextColor={Colors.DEFAULT_GREY}
                            keyboardType="number-pad"
                            selectionColor={Colors.DEFAULT_GREY}
                            onFocus={() => setIsDropdownOpen(false)}
                            onChangeText={(text) => setPhoneNumber(selectedCountry?.dial_code + text)}
                        />
                    </View>
                </View>
                <Button
                    buttonText='Continue'
                    containerStyle={{
                        flexDirection: "row",
                        backgroundColor: Colors.DEFAULT_GREEN,
                        justifyContent: 'center',
                        marginHorizontal: 20,
                        paddingVertical: 20,
                        borderRadius: 15,
                    }}
                    StyleText={{
                        color: "black",
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                    onPress={() =>
                        navigation.navigate("Verifications", { phoneNumber })
                    }
                />

            </View>
            {isDropdownOpen && (
                <View style={getDropdownStyle(inputsContainerY)} onLayout={({ nativeEvent: { layout: { x, y, height, width } } }) => setDropdownLayout({ x, y, height, width })}>
                    <FlatList
                        data={CountryCode}
                        keyExtractor={item => item.code}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <FlagItem {...item}
                            onPress={(country) => {
                                setSelectedCountry(country),
                                    setIsDropdownOpen(false)
                            }}
                        />}
                    />
                </View>
            )}
        </LayoutScreen>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        height: Display.setHeight(71.5),
    },
    inputContainer: {
        flexDirection: "row-reverse",
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 50,
    },
    countryListContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        width: Display.setWidth(22),
        marginLeft: 10,
        borderRadius: 8,
        height: Display.setHeight(6),
        justifyContent: "space-evenly",
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        flexDirection: 'row',
    },
    phoneInputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
        flex: 1,
    },
    flatIcon: {
        width: 20,
        height: 20,
    },
    countryCodeText: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.Poppins_Medium,
    },
    inputText: {
        fontSize: 18,
        textAlignVertical: "center",
        padding: 0,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK
    },
    countryDropdown: {
        backgroundColor: Colors.LIGHT_GREY,
        position: "absolute",
        width: Display.setWidth(80),
        height: Display.setHeight(50),
        right: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        zIndex: 3,
    }
});

//make this component available to the app
export default RegisterPhone;
