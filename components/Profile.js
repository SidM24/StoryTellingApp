import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import image from '../Images/profilebg.jpeg'
import user_logo from '../Images/user_logo.png'
const Profile = (props) => {
    const [firstname, setfirstName] = useState('John');
    const [lastname, setlastName] = useState('Doe');
    const [phone, setPhone] = useState('123-456-7890');
    const [email, setEmail] = useState('testbhadwa@gmail.com');

    const handleResetPassword = () => {
        // Implement password reset functionality here
    };

    return (
        <View>
            <ImageBackground source={image} resizeMode='cover' style={{ height: '100%', width: '100%' }}>
                <View style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: '50%', width: '80%', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 20, padding: 20 }}>
                        <View style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
                            <Image source={user_logo} style={{ borderRadius: 150, height: 80, width: 80, margin: 'auto' }} ></Image>
                        </View>
                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'monospace', textAlign: 'center' }}>Account Details</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text style={{ color: 'grey', fontSize: 16 }}>FirstName:</Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>{firstname}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text style={{ color: 'grey', fontSize: 16 }}>LastName:</Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>{lastname}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text style={{ color: 'grey', fontSize: 16 }}>MobileNo:</Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>{phone}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text style={{ color: 'grey', fontSize: 16 }}>EmailId:</Text>
                            <Text style={{ color: 'white', fontSize: 12 }}>{email}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => alert('Dekh le agr banana hai toh bana diyo')}>
                                <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'white' }}>ResetPassword</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                                <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'white' }}>Logout</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Profile;
