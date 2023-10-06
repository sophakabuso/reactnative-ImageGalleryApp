import React, { useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import db from '../database/DBHelper';

function GalleryScreen({ navigation }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch image metadata from the database
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM images ORDER BY timestamp DESC',
        [],
        (_, { rows }) => {
          setImages(rows._array);
        },
        error => {
          console.error(`Error fetching images: ${error}`);
        }
      );
    });
  }, []);

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ImageView', { image: item.filePath })
            }>
            <Image source={{ uri: item.filePath }} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default GalleryScreen;
