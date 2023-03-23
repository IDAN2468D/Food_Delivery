import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LayoutScreen from './LayoutScreen'
import { Display } from '../utils'

const VerificationsScreen = ({ route: { params: { phoneNumber } } }) => {
    return (
        <LayoutScreen
            headerTitle="OTP Verification"
            title="OTP Verification"
            subtitle="Enter the OTP number just sent you at"
            phoneNumber={phoneNumber}
        >
            <View style={styles.container}>

            </View>
        </LayoutScreen>
    )
}

export default VerificationsScreen

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height: Display.setHeight(71.1),
    }
})