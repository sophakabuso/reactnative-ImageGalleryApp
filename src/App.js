// App.js
import React, { useEffect } from 'react';
import { View } from 'react-native';
import initializeDatabase from './src/database';
import RNFS from 'react-native-fs';

const App = () => {
  useEffect(() => {
    const directoryName = 'myFolder';
    const directoryPath = `${RNFS.DocumentDirectoryPath}/${directoryName}`;

    RNFS.mkdir(directoryPath)
      .then(() => {
        console.log(`Directory "${directoryName}" created successfully.`);
      })
      .catch((error) => {
        console.error('Error creating directory:', error);
      });
  }, []); // Run this effect only once during app initialization

    initializeDatabase();//In your app's entry point (usually App.js), import the initializeDatabase function and call it to initialize the database when the app starts:
  }, []);

  return (
    <View>
      {/* Your app components */}
    </View>
  );
};

export default App;
