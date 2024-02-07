import React, { useState } from "react";
import Capture from "./src/screens/Capture";
import DisplayEmotion from "./src/screens/DisplayEmotion";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import FirstPage from "./src/screens/FirstPage";
import StoryDisplay from "./src/screens/StoryDisplay";
import Story from "./src/screens/Story";
import ExploreStory from "./src/screens/ExploreStory";
import Stories from "./src/screens/Stories";
import Profile from "./src/screens/Profile";



const App = () => {
    const [screen, setScreen] = useState('Home');
    const [emotion,setEmotion] = useState('');
    const [storyDisp,setDisp] = useState({});
    const [user,setUser] = useState({})

    if (screen === "Story") {
        return (
            <Story emotion  = {emotion}  setScreen={setScreen}/>
        );
    } else if (screen === "Capture") {
        return (
            <Capture setScreen = {setScreen} setEmotion = {setEmotion}/>
        );
    }else if (screen === "Home") {
        return (
            <Home setScreen = {setScreen}/>
        );
    } else if (screen === "Login") {
        return (
            <Login setScreen = {setScreen} setUser = {setUser}/>
        );
    }
    else if (screen === "SignUp") {
        return (
            <SignUp setScreen = {setScreen}/>
        );
    } 
    else if (screen === "FirstPage") {
        return (
            <FirstPage setScreen = {setScreen} user = {user}/>
        );
    } 
    else if (screen === "Explore") {
        return (
            <ExploreStory setScreen = {setScreen} setStoryDisp = {setDisp}/>

        );
    }

    else if (screen === "Stories") {
        return (
            <Stories setScreen = {setScreen} story = {storyDisp}/>
        );
    }
    else if (screen === "Profile") {
        return (
            <Profile setScreen = {setScreen} user = {user}/>
        );
    }
    
    
    
    else if (screen === "dis") {
        
        return (
            <DisplayEmotion emotion  = {emotion}  setScreen={setScreen}/>
        );
    }
}

export default App;
