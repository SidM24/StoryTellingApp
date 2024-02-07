import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, ActivityIndicator } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFetchBlob from 'rn-fetch-blob'

const Capture = ({ setScreen, setEmotion }) => {
  const [cameraPermission, setCameraPermission] = useState('not granted');
  const [cameraDevices, setCameraDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [loading, setLoading] = useState(false);
  const camera = useRef(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const newCameraPermission = await Camera.requestCameraPermission();
      setCameraPermission(newCameraPermission);

      if (newCameraPermission === 'granted') {
        const availableDevices = await Camera.getAvailableCameraDevices();
        setCameraDevices(availableDevices);

        // Let's select the first available back camera if there is one
        const backCamera = availableDevices.find((d) => d.position === 'front');
        if (backCamera) {
          setSelectedDevice(backCamera);
        }
      }
    };

    requestCameraPermission();
  }, []);

  const handleCapture = async () => {
    if (camera.current) {
      setLoading(true); // Set loading to true when starting to capture

      const photo = await camera.current.takePhoto({ qualityPrioritization: 'speed', flash: 'off', enableShutterSound: false });

      await CameraRoll.save(`file://${photo.path}`, { type: 'photo' });

      RNFetchBlob.fetch('POST', 'https://se-backend-x9y5.onrender.com/photo/getimg', {

        'Content-Type': 'multipart/form-data',
      }, [
        {
          name: 'photo',
          filename: 'captured_photo.jpg',
          type: 'image/jpeg',
          data: RNFetchBlob.wrap(photo.path)
        }
      ]).then((resp) => {
        console.log('upload success', resp);
        let data = resp["data"];
        // Split the string by newline character and get the last but one element
        let emotion = data.split('\n').slice(-2, -1)[0];

        // Remove the double quotes around the emotion
        emotion = emotion.replace(/"/g, '');

        setEmotion(emotion);
        setScreen("dis");
      }).catch((err) => {
        console.log('upload error', err);
        setLoading(false);
        setEmotion('happy');
        setScreen('dis');
      }).finally(() => {
        setLoading(false);
        setEmotion('happy');
        setScreen('dis'); // Set loading to false after the capture process is complete
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {cameraPermission === 'granted' && selectedDevice && (
        <View style={styles.cameraContainer}>
          <Camera style={StyleSheet.absoluteFill} device={selectedDevice} isActive={true} photo={true} ref={camera} />
          <View style={styles.buttonContainer}>
            <Button title="Capture" onPress={handleCapture} />
          </View>
        </View>
      )}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Capturing and processing...</Text>
        </View>
      )}
      {cameraPermission !== 'granted' && !loading && (
        <View style={styles.permissionDenied}>
          <Text>Camera permission not granted</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  permissionDenied: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Capture;
