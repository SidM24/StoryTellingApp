import {React,useRef,useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import TypeWriter from 'react-native-typewriter';

const Reader = (props) => {
  const { story } = props;

  const myScrollView = useRef(null);
    useEffect(() => {
        myScrollView.current.scrollToEnd({ animated: true });
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      style={{ marginTop: 20 }}
      ref={myScrollView}
      onContentSizeChange={() => myScrollView.current.scrollToEnd({ animated: true })}>
        <View>
          <TypeWriter
            maxDelay={50}
            minDelay={20}
            typing={1} 
            style={styles.paragraph}
          >
            {story}
          </TypeWriter>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  paragraph: {
    color:'white',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default Reader;
