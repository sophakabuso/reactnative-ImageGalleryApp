// database/retrieve.js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'imageGallery.db', location: 'default' });

const retrieveImageMetadata = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM images',
        [],
        (_, results) => {
          const imageMetadata = results.rows.raw();
          resolve(imageMetadata);
        },
        (error) => {
          console.error('Error retrieving image metadata:', error);
          reject(error);
        }
      );
    });
  });
};

export { retrieveImageMetadata };
