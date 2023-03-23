import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Colors } from '../StyleGuide';

const FromInput = ({
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    IconsComponent,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = ""
}) => {
    return (
        <>
            <View style={styles.ErrorText}>
                <Text style={styles.Text}>{errorMsg}</Text>
                {appendComponent}
            </View>
            <View style={styles.TextInput}>
                {prependComponent}
                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    placeholder={placeholder}
                    placeholderTextColor="black"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                />
                {IconsComponent}
            </View>
        </>
    )
}

export default FromInput

const styles = StyleSheet.create({
    ErrorText: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    Text: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold"
    },
    TextInput: {
        flexDirection: "row",
        paddingVertical: 5,
        marginTop: 5,
        opacity: 0.4,
        backgroundColor: Colors.DEFAULT_WHITE,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        paddingHorizontal: 20,
        marginHorizontal: 20,
    }
})