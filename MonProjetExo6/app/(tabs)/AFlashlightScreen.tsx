import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'; 
import { Camera, CameraView, CameraType, useCameraPermissions } from 'expo-camera';


const cameraRef = useRef(null);

export default function AFlashLightScreen() { 

    const [isFlashlightOn, setIsFlashlightOn] = useState(false);
    const [isCameraOn, setCameraOn] = useState(false);

    const cameraReady = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === 'granted') {
        setIsFlashlightOn(true);
        setCameraOn(true);
      }
    };
    
    useEffect(() => {
      cameraReady();
    }, []);

    const toggleFlash = () => {
        setIsFlashlightOn(!isFlashlightOn);
    }
    
  return ( 
        <CameraView
            ref={cameraRef}
            facing="back"
            enableTorch={isFlashlightOn}
            onCameraReady={cameraReady}
        >

          {isCameraOn && (
            <View>
              <Button title={isFlashlightOn ? 'Flashlight Off' : 'Flashlight On'} onPress={toggleFlash}/>
              <Ionicons name={isFlashlightOn ? 'flash' : 'flash-off'} size={24} color="black" type="MaterialCommunityIcons" />
            </View>         
          )}


        </CameraView>

  ); 
}
