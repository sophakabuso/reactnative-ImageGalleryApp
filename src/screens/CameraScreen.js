import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      // Save the captured image to the file system and database.
    }
  };

  return (
    <View>
      <RNCamera ref={cameraRef} />
      <TouchableOpacity onPress={takePicture}>
        <Text>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
