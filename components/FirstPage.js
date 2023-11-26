import { View, Text, ImageBackground, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import TypeWriter from 'react-native-typewriter'

import image from '../Images/FirstPage_bg.png'
import user_logo from '../Images/user_logo.png'
import rec_img from '../Images/recommendations.png'
import explore_img from '../Images/explore1.png'
const FirstPage = (props) => {
    const [Drop, setDrop] = useState(false);
    return (
        <View>
            <ImageBackground source={image} resizeMode='cover' style={{ height: '100%', width: '100%' }}>
                <View style={{ height: '55%', width: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20 }}>
                    <Pressable onPress={() => setDrop(!Drop)} style={{ marginRight: 20, marginLeft: 'auto', marginTop: 20, zIndex: 1 }}>
                        <Image source={user_logo} style={{ borderRadius: 150, height: 40, width: 40 }} ></Image>
                    </Pressable>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ zIndex: 1, position: 'absolute', marginLeft: 300, marginTop: 64, display: Drop ? "" : 'none' }}>
                        <Text style={{ color: 'white', paddingLeft: 7, paddingRight: 7, paddingTop: 5, paddingBottom: 5, width: 80, textAlign: 'center' }}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Profile')} style={{ zIndex: 1, position: 'absolute', marginLeft: 300, marginTop: 94, display: Drop ? "" : 'none' }}>
                        <Text style={{ color: 'white', paddingLeft: 7, paddingRight: 7, paddingTop: 5, paddingBottom: 5, width: 80, textAlign: 'center' }}>Setting</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, color: 'white', position: 'relative', marginTop: -35, width: "100%", textAlign: 'center', paddingRight: 40, fontFamily: 'monospace' }}>Welcome Siddharth</Text>
                    <View style={{ margin: 40, height: 75 }}>
                        <TypeWriter
                            typing={1}
                            style={{ fontSize: 15, fontFamily: 'monospace', marginTop: 15, color: 'white' }}>
                            Sit back, relax, and get ready to embark on a journey of pure storytelling delight!!
                        </TypeWriter>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <View style={{ height: 190, width: 150, marginTop: 5, borderRadius: 20, padding: 10, paddingBottom: 12 }}>
                            <Pressable style={{ margin: 0, padding: 0 }} onPress={() => props.navigation.navigate('ExploreStory')}>
                                <Image source={rec_img} resizeMode='contain' style={{ height: "90%", width: '100%', marginTop: 0 }}></Image>
                            </Pressable>
                            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Explore Stories</Text>
                        </View>
                        <View style={{ height: 190, width: 150, marginTop: 5, borderRadius: 20, padding: 10, paddingBottom: 12 }}>
                            <Pressable style={{ margin: 0, padding: 0 }} onPress={() => props.navigation.navigate('StoryDisplay', { story: 'Recommend' })}>
                                <Image source={explore_img} resizeMode='contain' style={{ height: "82%", width: '100%', borderRadius: 20, marginTop: 4, marginBottom: 10, zIndex: 1 }}></Image>
                            </Pressable>
                            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Recommend Story</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default FirstPage