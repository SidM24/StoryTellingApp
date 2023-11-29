import React, { useRef, useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import image from "../Images/StoryDisplaybg.jpeg"
import TypeWriter from 'react-native-typewriter'

const StoryDisplay = ({ emotion, setScreen }) => {

    const [loading, setLoading] = useState(true);
    const [storyData, setStoryData] = useState({ title: '', story: '' });
    const myScrollView = useRef(null);
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [nextPara, setNextPara] = useState(1);
    const [paragraphs, setPara] = useState(['khkhkhkj', 'affewfewf']);

    useEffect(() => {
        const loadStory = async () => {
            try {

                const response = await fetch('http://192.168.234.207:3000/story/fetch', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sent: 'Surprise'
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setStoryData(data);
                    console.log((storyData.story).split('/n/n'))
                    setPara((storyData.story).split('/n/n')); // Set the story data in state
                    console.log(paragraphs);
                    setLoading(false); // Set loading to false once the story is loaded
                } else {
                    console.error('fetch failed');
                    // Handle registration failure
                }
            } catch (error) {
                console.error('Error during registration:', error);
                // Handle error
            }
        };

        // Call the loadStory function
        loadStory();
    }, [emotion]);










    return (

        <View style={{ height: '100%', width: '100%' }}>
            <ImageBackground source={image} resizeMode='cover' style={{ height: '100%', width: '100%' }}>
                <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.56)', paddingLeft: 10 }}>
                    {loading ? (
                        // Display activity indicator while loading
                        <ActivityIndicator size="large" color="white" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
                    ) : (
                        <>
                            <View style={{ height: '70%', margin: 10, marginTop: 30 }}>
                                <Text style={{ fontSize: 20, zIndex: 1, color: 'white' }}>{storyData.title}</Text>
                                <ScrollView
                                    style={{ marginTop: 20 }}
                                    ref={myScrollView}
                                    onContentSizeChange={() => myScrollView.current.scrollToEnd({ animated: true })}
                                >
                                    {paragraphs.map((paragraph, index) => (
                                        <TypeWriter
                                            maxDelay={75}
                                            minDelay={50}
                                            key={index}
                                            typing={index === currentParagraph}
                                            style={{ fontSize: 15, fontFamily: 'monospace', marginTop: 15, color: 'white' }}
                                        >
                                            {paragraph}
                                        </TypeWriter>
                                    ))}
                                </ScrollView>

                                <TouchableOpacity
                                    onPress={() => {
                                        if (currentParagraph < paragraphs.length - 1) {
                                            setCurrentParagraph(currentParagraph + 1);
                                        }
                                        if (currentParagraph >= paragraphs.length - 2) {
                                            setNextPara(0);
                                        }
                                    }}
                                    style={{
                                        marginLeft: 'auto',
                                        marginRight: 10,
                                        display: nextPara ? "" : 'none'
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', padding: 8 }}>
                                        Next Para -{'>'}
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 'auto', marginBottom: 40, display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => alert('Regenerate Story')}
                                    style={{
                                        backgroundColor: 'black',
                                        borderRadius: 100,
                                        alignItems: 'center',
                                        width: 150,
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', padding: 8 }}>
                                        Regenerate Story
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setScreen('FirstPage')}
                                    style={{
                                        backgroundColor: 'black',
                                        borderRadius: 100,
                                        alignItems: 'center',
                                        width: 150,
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', padding: 8 }}>
                                        Home
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </View>
            </ImageBackground>
        </View>
    )

}

export default StoryDisplay