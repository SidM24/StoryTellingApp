import React, { useEffect, useRef,useState } from 'react'
import { Text, View, ImageBackground, ScrollView, SafeAreaView, Pressable,TouchableOpacity } from 'react-native'
import image from '../Images/StoryDisplaybg2.jpeg'
import Stories from './Stories'

const ExploreStory = ({setScreen,setStoryDisp}) => {

    const [loading, setLoading] = useState(true);
  const [storyData, setStoryData] = useState([]);


  useEffect(() => {
    const loadStory = async () => {
      try {
        const response = await fetch('https://se-backend-x9y5.onrender.com/allstories/get', {
          method: 'GET',
        });
   
        if (response.ok) {
          const data = await response.json();
          console.log('all:', data.length);
          setStoryData(data);
        } else {
          console.error('fetch failed');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };
   
    loadStory();
   }, []);
   



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
                <View
          style={{
            position: 'absolute',
            bottom:20,
            
            width: '100%',
            
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          <TouchableOpacity onPress={() => setScreen('FirstPage')} style ={{alignSelf:'center'}}>
            <Text style={{ fontWeight: 700, color: 'white' }}>Back</Text>
          </TouchableOpacity>
        </View>
                    <Text style={{ margin: 15, marginTop: 30, fontSize: 30, fontFamily: 'monospace', color: 'white' }}>All Stories</Text>
                    <SafeAreaView style={{ width: '100%', height: '80%' }}>
                        <ScrollView>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center', padding: 20 }}>
                                {storyData.map((test) => (
                                    <Pressable onPress={() =>{setStoryDisp(test);
                                    setScreen('Stories')
                                    } }>
                                        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, height: 130, width: 150, margin: 5, padding: 10, overflow: 'hidden' }}>
                                            <ScrollView
                                                horizontal={true}
                                            >
                                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                                                    {test.title}
                                                </Text>
                                            </ScrollView>
                                            <Text style={{ color: 'grey', overflow: 'hidden', height: 50 }}>
                                                {test.story}
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