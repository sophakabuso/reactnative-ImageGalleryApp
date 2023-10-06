import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImagePickerScreen = () => {
  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // User canceled image selection.
      } else if (response.error) {
        // Handle image selection error.
      } else {
        const imagePath = response.uri; // Image path
        // Save the selected image to the file system and database.
      }
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={selectImage}>
        <Text>Select Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerScreen;
