// database/delete.js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'imageGallery.db', location: 'default' });

const deleteImageMetadata = (imageId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM images WHERE id = ?',
        [imageId],
        (_, result) => {
          resolve(result.rowsAffected > 0);
        },
        (error) => {
          console.error('Error deleting image metadata:', error);
          reject(error);
        }
      );
    });
  });
};

export { deleteImageMetadata };
