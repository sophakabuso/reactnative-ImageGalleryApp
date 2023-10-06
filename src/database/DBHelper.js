import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'ImageGallery.db',
    location: 'default',
  },
  () => {},
  error => {
    console.error(`Error opening database: ${error}`);
  }
);

// Create the image metadata table
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY AUTOINCREMENT, filePath TEXT, latitude REAL, longitude REAL, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)',
    [],
    () => {},
    error => {
      console.error(`Error creating table: ${error}`);
    }
  );
});

export default db;
