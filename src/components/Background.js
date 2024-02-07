import React from 'react'
import { ImageBackground, View } from 'react-native'
import home_bg_img from '../Images/home_bg2.jpeg'
const Background = ({ children }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={home_bg_img} resizeMode='cover' style={{ height: '100%' }}>
                <View style={{ position: 'absolute' }}>
                    {children}
                </View>
            </ImageBackground>
        </View>
    )
}

export default Background
