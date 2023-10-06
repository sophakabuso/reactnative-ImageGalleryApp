// database/insert.js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'imageGallery.db', location: 'default' });

const insertImageMetadata = (imagePath, latitude, longitude) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO images (imagePath, latitude, longitude) VALUES (?, ?, ?)',
        [imagePath, latitude, longitude],
        (_, result) => {
          resolve(result.insertId);
        },
        (error) => {
          console.error('Error inserting image metadata:', error);
          reject(error);
        }
      );
    });
  });
};

export { insertImageMetadata };
