import { TextInput } from 'react-native'
import React from 'react'

const InputField = (props) => {
    return (
        <TextInput {...props} style={{
            borderRadius: 50,
            color: 'cyan',
            width: '80%',
            backgroundColor: 'black',
            margin:15,
            marginLeft:40,
            marginTop:20,
            paddingLeft:20
        }}>
        </TextInput>
    )
}

export default InputField