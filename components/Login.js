import React, { useState } from 'react'
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import Login_bg from '../Images/Login_bg.jpeg'
import InputField from './InputField'
import Btn from './Btn'
const Login = (props) => {
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
                }}>Login</Text>
            </View>
            <View style={{
                backgroundColor: 'rgba(255,255,255,0.6)',
                height: 450,
                marginLeft: 30,
                marginTop: 20,
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 20
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: 'black',
                    marginTop: 50,
                    fontSize: 30,
                    fontWeight: 'bold'
                }}>Welcome Back !!</Text>
                <Text style={{
                    textAlign: 'center',
                    color: 'black',
                    marginTop: 5,
                    fontSize: 15,
                    fontWeight: 400
                }}>Login to your account</Text>
                <InputField placeholder='Email/MobileNo.' />
                <InputField placeholder='Password' secureTextEntry={true} />
                <View style={{ alignItems: 'flex-end', paddingRight: 40 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Forgot Password?</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 80 }}>
                    <Btn button_label='Login' bgColor='#0a5e19' txt_color='white' Press={() => props.navigation.navigate('FirstPage')}></Btn>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{ textAlign: 'center', color: 'black' }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'blue' }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login
