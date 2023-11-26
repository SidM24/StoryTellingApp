import React, { useEffect, useRef } from 'react'
import { Text, View, ImageBackground, ScrollView, SafeAreaView, Pressable } from 'react-native'
import image from '../Images/StoryDisplaybg2.jpeg'

const ExploreStory = (props) => {
    const data = [
        { "title": "The Furious Storm fhdkshkfhsh dfkjhs kfhs hdfkh sdkf hks hkfjshkfks fkjshkf fh", "story": 'Lorem ipsum dolor dfs sit amet consectetur adipisicing elit. Asperiores sed quasi fugit commodi vitae similique deserunt dolorum eum, recusandae nihil quia consectetur aliquam fugiat reprehenderit saepe dolores fuga ratione quod vero a architecto ea. Ad est harum tempore amet nihil rem doloremque, atque accusantium assumenda commodi dolorum totam iure cumque.', "category": 'happy' },
        { "title": "The Furious Storm", "story": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed quasi fugit commodi vitae similique deserunt dolorum eum, recusandae nihil quia consectetur aliquam fugiat reprehenderit saepe dolores fuga ratione quod vero a architecto ea. Ad est harum tempore amet nihil rem doloremque, atque accusantium assumenda commodi dolorum totam iure cumque.', "category": 'happy' },
        { "title": "The Furious Storm", "story": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed quasi fugit commodi vitae similique deserunt dolorum eum, recusandae nihil quia consectetur aliquam fugiat reprehenderit saepe dolores fuga ratione quod vero a architecto ea. Ad est harum tempore amet nihil rem doloremque, atque accusantium assumenda commodi dolorum totam iure cumque.', "category": 'happy' },
        { "title": "The Furious Storm", "story": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed quasi fugit commodi vitae similique deserunt dolorum eum, recusandae nihil quia consectetur aliquam fugiat reprehenderit saepe dolores fuga ratione quod vero a architecto ea. Ad est harum tempore amet nihil rem doloremque, atque accusantium assumenda commodi dolorum totam iure cumque.', "category": 'happy' },
        { "title": "The Furious Storm", "story": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed quasi fugit commodi vitae similique deserunt dolorum eum, recusandae nihil quia consectetur aliquam fugiat reprehenderit saepe dolores fuga ratione quod vero a architecto ea. Ad est harum tempore amet nihil rem doloremque, atque accusantium assumenda commodi dolorum totam iure cumque.', "category": 'happy' },
        { "title": "Shyam", "story": "shyam23@gmail.com", "category": 'sad' },
        { "title": "John", "story": "john@gmail.com", "category": 33 },
        { "title": "John", "story": "john@gmail.com", "category": 33 },
        { "title": "John", "story": "john@gmail.com", "category": 33 },
        { "title": "John", "story": "john@gmail.com", "category": 33 },
        { "title": "John", "story": "john@gmail.com", "category": 33 },
        { "title": "Bob", "story": "bob32@gmail.com", "category": 41 }
    ]
    return (
        < View style={{ height: '100%', width: '100%' }}>
            <ImageBackground source={image} resizeMode='cover' style={{ height: '100%', width: '100%' }}>
                <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <Text style={{ margin: 15, marginTop: 20, fontSize: 30, fontFamily: 'monospace', color: 'white' }}>All Stories</Text>
                    <SafeAreaView style={{ width: '100%', height: '80%' }}>
                        <ScrollView>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center', padding: 20 }}>
                                {data.map((test) => (
                                    <Pressable onPress={() => props.navigation.navigate('StoryDisplay', { story: test.story })}>
                                        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, height: 135, width: 150, margin: 10, padding: 10, overflow: 'hidden' }}>
                                            <ScrollView
                                                horizontal={true}
                                            >
                                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                                    {test.title}
                                                </Text>
                                            </ScrollView>
                                            <Text style={{ color: 'grey', overflow: 'hidden', height: 50 }}>
                                                {test.story}
                                            </Text>
                                            <Text style={{ marginTop: 5 }}>
                                                Category: {test.category}
                                            </Text>
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </View >
    )
}

export default ExploreStory
