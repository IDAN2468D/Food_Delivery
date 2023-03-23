import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors, Fonts, General } from '../StyleGuide';
import { WelcomeCard, Separator } from '../components';
import { Display } from '../utils';

const pageStyle = isActive =>
    isActive ? styles.Page : { ...styles.Page, backgroundColor: Colors.DEFAULT_GREY };

function Pagination({ index }) {
    return (
        <View style={styles.PageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
                i === index ? (
                    <View style={pageStyle(true)} key={i} />
                ) : (
                    <View style={pageStyle(false)} key={i} />
                ),
            )}
        </View>
    );
};

const WelcomeScreen = ({ navigation }) => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0);
    const welcomeList = useRef();

    const onViewRef = useRef(({ changed }) => {
        setWelcomeListIndex(changed[0].index);
    });

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} />
            <Separator height={Display.setHeight(8)} />
            <Separator height={StatusBar.currentHeight} />
            <View style={styles.welcomeListContainer}>
                <FlatList
                    ref={welcomeList}
                    data={General.WELCOME_CONTENTS}
                    keyExtractor={item => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    viewabilityConfig={viewConfigRef.current}
                    onViewableItemsChanged={onViewRef.current}
                    overScrollMode="never"
                    renderItem={({ item, index }) =>
                        <WelcomeCard {...item} />
                    }
                />
            </View>
            <Separator height={Display.setHeight(8)} />
            <Pagination index={welcomeListIndex} />
            <Separator height={Display.setHeight(8)} />
            {welcomeListIndex === 2 ? (
                <TouchableOpacity
                    style={styles.gettingStartedButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.gettingStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={0.8} style={{ marginRight: 10, }} onPress={() => welcomeList.current.scrollToEnd()}>
                        <Text style={styles.buttonText}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => pageScroll()}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: Colors.DEFAULT_WHITE,
    },
    welcomeListContainer: {
        height: Display.setHeight(60),
    },
    PageContainer: {
        flexDirection: "row-reverse"
    },
    Page: {
        height: 8,
        width: 15,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: Display.setWidth(90),
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.DARK_ONE,
        fontSize: 16,
        fontFamily: Fonts.Poppins_Bold,
        lineHeight: 16 * 1.4
    },
    button: {
        backgroundColor: Colors.LIGHT_GREEN,
        paddingHorizontal: 20,
        paddingVertical: 11,
        borderRadius: 32,
    },
    gettingStartedButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    gettingStartedButtonText: {
        fontSize: 20,
        color: Colors.DEFAULT_WHITE
    }
})