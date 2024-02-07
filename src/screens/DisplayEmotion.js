import React from "react";
import { View,Text,StyleSheet,SafeAreaView,Button } from "react-native";
import Btn from "../components/Btn";

const DisplayEmotion = ({emotion,setScreen})=>{
    console.log(emotion.trim().length)
    let comp = "No face detected"
    console.log("comp is"+comp.length) 
    if(emotion.trim().toLowerCase() === comp.trim().toLowerCase()){

        alert('No face detected,please try again')
        setScreen('FirstPage')
    }
    else{
        for(let i=0; i<emotion.length; i++) {
            if(emotion.charCodeAt(i) !== comp.charCodeAt(i)) {
              console.log(`Mismatch at index ${i}: ${emotion[i]} (${emotion.charCodeAt(i)}) vs ${comp[i]} (${comp.charCodeAt(i)})`);
            }
          }
          
        return(

            <SafeAreaView style = {styles.container}>
                <View style ={{display:'flex-row',alignItems:'center'}}>
                <Text style = {{}}>Your Emotion:{emotion}</Text>
                <Button title="show stories" onPress={() => setScreen('Story')} />
    
                </View>
            </SafeAreaView>
            )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }

})
export default DisplayEmotion;