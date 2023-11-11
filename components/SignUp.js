import React from 'react'
import { Text, ImageBackground, View, TouchableOpacity, TextInput } from 'react-native'
import Login_bg from '../Images/Login_bg.jpeg'
import Btn from './Btn'
const SignUp = (props) => {
    return (
        <ImageBackground source={Login_bg} resizeMode='cover' style={{ height: '100%', width: '100%' }}>
            <View>
                <Text style={{
                    width: '100%',
                    marginTop: 50,
                    fontSize: 80,
                    fontWeight: 600,
                    color: 'white',
                    textAlign: 'center'
                }}>Register</Text>
            </View>
            <View style={{
                backgroundColor: 'rgba(255,255,255,0.6)',
                height: 520,
                marginLeft: 30,
                marginTop: 0,
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 20
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: 'black',
                    marginTop: 40,
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>Create a new account</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        placeholder='First Name'
                        style={{
                            borderRadius: 50,
                            color: 'cyan',
                            width: '40%',
                            backgroundColor: 'black',
                            marginTop: 20,
                            paddingLeft: 20
                        }}></TextInput>
                    <TextInput
                        placeholder='Last Name'
                        style={{
                            borderRadius: 50,
                            color: 'cyan',
                            width: '40%',
                            backgroundColor: 'black',
                            marginTop: 20,
                            paddingLeft: 20
                        }}></TextInput>
                </View>
                <TextInput
                    placeholder='Email'
                    style={{
                        borderRadius: 50,
                        color: 'cyan',
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 12,
                        paddingLeft: 20,
                        marginLeft: 40
                    }}></TextInput>
                <TextInput
                    placeholder='Mobile Number'
                    style={{
                        borderRadius: 50,
                        color: 'cyan',
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 12,
                        paddingLeft: 20,
                        marginLeft: 40
                    }}></TextInput>
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    style={{
                        borderRadius: 50,
                        color: 'cyan',
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 12,
                        paddingLeft: 20,
                        marginLeft: 40
                    }}></TextInput>
                <TextInput
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    style={{
                        borderRadius: 50,
                        color: 'cyan',
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 12,
                        paddingLeft: 20,
                        marginLeft: 40
                    }}></TextInput>
                <View style={{ alignItems: 'center', marginTop: 80 }}>
                    <Btn button_label='SignUp' bgColor='#0a5e19' txt_color='white' Press={() => {
                        alert("Registered Successfully")
                        props.navigation.navigate('Login')
                    }} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{ textAlign: 'center', color: 'black' }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'blue' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignUp
