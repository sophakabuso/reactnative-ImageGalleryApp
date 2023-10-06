import React from 'react';
import { Image, Text, View } from 'react-native';

function ImageViewScreen({ route }) {
  const { image } = route.params;

  return (
    <View>
      <Image source={{ uri: image }} style={{ width: '100%', height: '70%' }} />
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
  );
}

export default ImageViewScreen;
