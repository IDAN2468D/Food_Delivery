import React from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';
import { Images } from '../StyleGuide';

const FacebookButton = ({ buttonText, onPress, containerStyle, StyleText, disabled, StyleIcons, ContainerIcon }) => {
    return (
        <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
            <View style={{ ...containerStyle }}>
                <Text style={{ ...StyleText }}>{buttonText}</Text>
                <View style={{ ...ContainerIcon }}>
                    <Image source={Images.Facebook} style={{ ...StyleIcons }} />
                </View>

            </View>
        </TouchableNativeFeedback>
    )
}

export default FacebookButton