import * as React from 'react';
import {
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import Login from './components/Login';
import SignUp from './components/SignUp';
import FirstPage from './components/FirstPage';
import StoryDisplay from './components/StoryDisplay';
import ExploreStory from './components/ExploreStory';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='FirstPage' component={FirstPage} />
        <Stack.Screen name='StoryDisplay' component={StoryDisplay} />
        <Stack.Screen name='ExploreStory' component={ExploreStory} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;