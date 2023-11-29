import React, { useState } from "react";

import { Text, ImageBackground, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import Login_bg from '../Images/Login_bg.jpeg'
import Btn from '../components/Btn'



const SignUp = ({ setScreen }) => {

    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setMail] = useState('');
    const [mobileNumber, setNumber] = useState('');
    const [password, setPass] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSignUp = async () => {


        try {
            if (!/\S+@\S+\.\S+/.test(email)) {
                setMail('')
                alert('Invalid Email Entered')
            }
            else if (password.length < 5) {
                setPass('')
                setConfirm('')
                alert('Password length should be greater than 5 and less than 18')
            }
            else if (password != confirm) {
                setPass('')
                setConfirm('')
                alert("Password dosen't match")
            }
            if (firstName == '' || lastName == '' || email == '' || mobileNumber == '') {
                

                alert("Fill in all the required fields")
            }
            else {
                const response = await fetch('https://se-backend-x9y5.onrender.com/user/info', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        mobileNumber,
                        password,
                        confirm,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Registration successful:', data);
                    alert('Registration Successfull! Login to continue.....')
                    setScreen('Login')

                    // Additional logic after successful registration
                } else {
                    alert('User already registered')
                    
                }
            }


        } catch (error) {
            console.error('Error during registration:', error);
            // Handle error
        }
    };

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
                        inputMode="text"
                        value = {firstName}
                        style={{
                            borderRadius: 50,
                            color: 'cyan',
                            width: '40%',
                            backgroundColor: 'black',
                            marginTop: 20,
                            paddingLeft: 20,
                        }}
                        onChangeText={(value) => setFirst(value)}
                    ></TextInput>
                    <TextInput
                        placeholder='Last Name'
                        inputMode="text"
                        value = {lastName}
                        style={{
                            borderRadius: 50,
                            color: 'cyan',
                            width: '40%',
                            backgroundColor: 'black',
                            marginTop: 20,
                            paddingLeft: 20
                        }}
                        onChangeText={(value) => setLast(value)}
                    ></TextInput>
                </View>
                <TextInput
                    placeholder='Email'
                    inputMode="email"
                    value = {email}
                    style={{
                        borderRadius: 50,
                        color: 'cyan',
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 12,
                        paddingLeft: 20,
                        marginLeft: 40
                    }}
                    onChangeText={(value) => setMail(value)}
                ></TextInput>
                <TextInput
                    placeholder='Mobile Number'
                    inputMode="numeric"
                    value = {mobileNumber}
                    maxLength={10}
                    style={{
                        borderRadius: 50,
                        color: 'cyan',
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 12,
                        paddingLeft: 20,
                        marginLeft: 40
                    }}
                    onChangeText={(value) => setNumber(value)
                    }
                ></TextInput>
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    value = {password}
                    maxLength={10}
                    minLength={5}
                    style={{
                        borderRadius: 50,
                        color: 'cyan',
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 12,
                        paddingLeft: 20,
                        marginLeft: 40
                    }}
                    onChangeText={(value) => setPass(value)}
                ></TextInput>
                <TextInput
                    placeholder='Confirm Password'
                    value = {confirm}
                    secureTextEntry={true}
                    style={{
                        borderRadius: 50,
                        color: 'cyan',
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 12,
                        paddingLeft: 20,
                        marginLeft: 40
                    }}
                    onChangeText={(value) => setConfirm(value)}
                ></TextInput>
                <View style={{ alignItems: 'center', marginTop: 80 }}>
                    <Btn button_label='SignUp' bgColor='#0a5e19' txt_color='white' Press={() => {
                        handleSignUp()
                    }} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{ textAlign: 'center', color: 'black' }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => setScreen('Login')}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'blue' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignUp
