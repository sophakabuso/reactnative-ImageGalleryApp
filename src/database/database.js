// database.js This code initializes the SQLite database and creates a table named images with fields for image path, latitude, longitude, and a timestamp.
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'imageGallery.db', location: 'default' });

const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        imagePath TEXT,
        latitude REAL,
        longitude REAL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      `,
      [],
      () => {
        console.log('Database initialized.');
      },
      (error) => {
        console.error('Error initializing database:', error);
      }
    );
  });
};

export default initializeDatabase;
