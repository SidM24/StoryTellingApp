import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Btn = ({ button_label, bgColor, txt_color, Press }) => {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                backgroundColor: bgColor,
                borderRadius: 100,
                alignItems: 'center',
                width: 150,
                marginTop: -50
            }}>
            <Text style={{
                color: txt_color,
                fontSize: 22,
                fontWeight: 'bold',
                padding: 8
            }}>
                {button_label}
            </Text>
        </TouchableOpacity>
    )
}

export default Btn
