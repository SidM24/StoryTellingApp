import React, { useRef, useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import image from '../Images/StoryDisplaybg.jpeg'
import TypeWriter from 'react-native-typewriter'

const StoryDisplay = (props) => {
    const myScrollView = useRef(null);
    useEffect(() => {
        myScrollView.current.scrollToEnd({ animated: true });
    }, []);
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [nextPara, setNextPara] = useState(1);
    let text = ''
    if (props.route.params.story == 'Recommend') {
        text = `In a small village nestled by the rugged cliffs, lived a person named Alex. Known for their calm demeanor, Alex was once a pillar of serenity. However, one fateful day, a series of events unfolded that ignited a fiery storm of anger within.\n\nThe catalyst was an unjust incident that shook the very core of Alex's being. The anger, a tempest brewing deep within, manifested like a furious storm on the horizon.\n\nAs the storm of rage raged within Alex, the sky above mirrored the internal turmoil. Thunder roared in unison with each heartbeat, and lightning streaked across the darkened clouds, reflecting the intensity of the emotions churning within.\n\nDriven by an uncontrollable fury, Alex sought solace on a cliff overlooking the tempestuous sea. Waves crashed against the rocks below, mirroring the tumultuous sea of anger within.\n\nIn the midst of the storm, a wise elder from the village approached, understanding the profound struggle. 'The storm within is a formidable force,' the elder spoke, 'but like any storm, it shall pass. Find the anchor that grounds you, and let the tempest subside.'\n\nWith these words, Alex embarked on a journey of self-discovery. Through introspection and moments of solitude, Alex confronted the roots of the anger and sought healthier channels for expression.\n\nSlowly, as the storm within began to relent, so did the tempest in the sky. The thunder softened, and the lightning transformed into a distant flicker. The angry sea gradually calmed, mirroring the newfound serenity within Alex.\n\nThe village, once overshadowed by the furious storm, witnessed the transformation. Alex emerged not defeated by anger but tempered by the experience, a resilient figure who weathered the emotional turbulence.\n\nThe tale of the furious storm became a parable in the village, reminding everyone that even the fiercest tempests could be tamed. Alex, now a beacon of resilience, carried the wisdom gained from the storm, forever changed by the transformative power of confronting and navigating through anger.`;
    }
    else {
        text = props.route.params.story
    }

    const paragraphs = text.split('\n\n');
    return (
        <View>
            <ImageBackground source={image} resizeMode='cover' style={{ height: '100%', width: '100%' }}>
                <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.56)', paddingLeft: 10 }}>
                    <View style={{ height: '70%', margin: 10, marginTop: 30 }}>
                        <Text style={{ fontSize: 20, zIndex: 1, color: 'white' }}>The Furious Storm</Text>
                        <ScrollView
                            style={{ marginTop: 20 }}
                            ref={myScrollView}
                            onContentSizeChange={() => myScrollView.current.scrollToEnd({ animated: true })}
                        >
                            {paragraphs.map((paragraph, index) => (
                                <TypeWriter
                                    maxDelay={10}
                                    minDelay={5}
                                    key={index}
                                    typing={index === currentParagraph}
                                    style={{ fontSize: 15, fontFamily: 'monospace', marginTop: 15, color: 'white' }}
                                >
                                    {paragraph}
                                </TypeWriter>
                            ))}
                        </ScrollView>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            if (currentParagraph < paragraphs.length - 1) {
                                // console.log(teststory)
                                setCurrentParagraph(currentParagraph + 1)
                            }
                            if (currentParagraph >= paragraphs.length - 2) {
                                setNextPara(0)
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
                            onPress={() => props.navigation.navigate('FirstPage')}
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
                </View>
            </ImageBackground>
        </View>
    )
}

export default StoryDisplay