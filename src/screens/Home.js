import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'


import Background from '../components/Background'
import Btn from '../components/Btn'
const Home = ({setScreen}) => {
    
    return (
        <View style={{ height: '100%', backgroundColor: 'black', width: '100%' }}>
            <Background>
                <View style={{ height: 500, backgroundColor: 'rgba(0,0,0,0.7)', width: 390, marginTop: 490, borderTopRightRadius: 80 }}>
                    <View >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, textAlign: 'center', borderRadius: 100, marginTop: 50, padding: 5, margin: 5 }}>Welcome Story Lovers !! </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'black', marginTop: 90 }}>
                        <Btn button_label={"Login"} bgColor={"green"} txt_color={"white"} Press={() => setScreen("Login")}></Btn>
                        <Btn button_label={"SignUp"} bgColor={"white"} txt_color={"green"} Press={() => setScreen("SignUp")}></Btn>
                    </View>
                </View>
            </Background>
        </View>
    )
}
const styles = StyleSheet.create({
})
export default Home
