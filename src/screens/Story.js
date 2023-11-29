import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import Reader from "../components/Reader";
import story from "../utilities/Story_dummy";
import image from "../Images/StoryDisplaybg.jpeg"

const Story = ({ emotion, setScreen }) => {
  const [loading, setLoading] = useState(true);
  const [storyData, setStoryData] = useState({ title: '', story: '' });
  const [regenerate,setRe]  = useState(0);


  useEffect(() => {
    const loadStory = async () => {
      try {

        const response = await fetch('https://se-backend-x9y5.onrender.com/story/fetch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sent: emotion
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('story:', data);
          setStoryData(data);
          setLoading(false);
        } else {
          alert("Server is Offline!please try again");
        }
      } catch (error) {
        alert('The Server is Offline!please try later')
      }
    };

    loadStory();
  }, [emotion,regenerate]);



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
                <TouchableOpacity
                  onPress={() => setRe(!regenerate)}
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 100,
                    alignItems: 'center',
                    width: 160,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', padding: 8 }}>
                    Regenerate Story
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

export default Story;
