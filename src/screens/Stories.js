import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import Reader from "../components/Reader";
import story from "../utilities/Story_dummy";
import image from "../Images/StoryDisplaybg.jpeg"

const Stories = ({ story, setScreen }) => {
    console.log("the story is")
    console.log(story);
    const [loading, setLoading] = useState(false);
  const [storyData, setStoryData] = useState(story);


  



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={{ height: '100%', width: '100%' }}>
        <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.56)', paddingLeft: 10 }}>
          <View style={styles.container1}>
            <Text style={styles.header}>{storyData.title}</Text>
            {loading ? (
              <Text>Loading...</Text>
            ) : (<>
              <View style={{ height: "70%" }}>
                <Reader story={storyData.story} />



              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 80 }}>

                <TouchableOpacity
                  onPress={() => setScreen('FirstPage')}
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 100,
                    alignItems: 'center',
                    width: 150,
                    
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', padding: 8 }}>
                    Home
                  </Text>
                </TouchableOpacity>
                
              </View>
            </>
            )}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  header: {
    alignSelf: "center",
    color: "white",
    marginBottom: 5,
    marginTop:20,
    fontSize:20
  },
});

export default Stories;
