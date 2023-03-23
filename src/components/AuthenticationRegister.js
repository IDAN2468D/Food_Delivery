import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../StyleGuide'

const AuthenticationRegister = ({ Register, Phone, navigation }) => {
    return (
        <View>
            <Text style={{ paddingBottom: 20 }}>Don't have on connect?
                <Text style={{ color: Colors.DEFAULT_GREEN }} onPress={() => navigation.navigate("Register")}> {Register}</Text>
                <Text style={{ color: Colors.DEFAULT_GREEN }} onPress={() => navigation.navigate("RegisterPhone")}> / {Phone}</Text>
            </Text>
        </View>
    )
}

export default AuthenticationRegister

const styles = StyleSheet.create({})