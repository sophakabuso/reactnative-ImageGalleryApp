// App.js
import React, { useEffect } from 'react';
import { View } from 'react-native';
import initializeDatabase from './src/database';

const App = () => {
  useEffect(() => {
    initializeDatabase();//In your app's entry point (usually App.js), import the initializeDatabase function and call it to initialize the database when the app starts:
  }, []);

  return (
    <View>
      {/* Your app components */}
    </View>
  );
};

export default App;
