import React, { useState } from 'react'
import { Text, ImageBackground, View, TouchableOpacity, TextInput } from 'react-native'
import Login_bg from '../Images/Login_bg.jpeg'
import InputField from './InputField'
import Btn from '../components/Btn'
const Login = ({ setScreen, setUser }) => {

    const [field1, setField1] = useState('');
    const [pass, setPass] = useState('')

    handleLogin = async () => {

        try {
            const response = await fetch('https://se-backend-x9y5.onrender.com/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    input1: field1,
                    password: pass
                })
            })

            if (response.status === 200) {
                const data = await response.json();


                console.log('Login Success:', data['user']);
                setUser(data['user']);

                setScreen('FirstPage')
                // Additional logic after successful registration
            } else {

                setField1('')
                setPass('')
                alert('Invalid UserID/Password');
                // Handle registration failure
            }
        }
        catch (error) {
            
            alert('Server down!Please try later', error);
            // Handle error
        }
    }

    

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
                <InputField placeholder='Email/MobileNo.' onChangeText={(value) => setField1(value)} value = {field1}/>
                <InputField placeholder='Password' secureTextEntry={true} onChangeText={(value) => setPass(value)} value = {pass} />
                <View style={{ alignItems: 'flex-end', paddingRight: 40 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Forgot Password?</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 80 }}>
                    <Btn button_label='Login' bgColor='#0a5e19' txt_color='white' Press={() => handleLogin()}></Btn>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{ textAlign: 'center', color: 'black' }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => setScreen('SignUp')}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'blue' }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login
