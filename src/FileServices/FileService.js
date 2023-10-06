// FileService.js (Custom utility)

import RNFS from 'react-native-fs';

export const createDirectory = async (directoryName) => {
  const directoryPath = `${RNFS.DocumentDirectoryPath}/${directoryName}`;

  try {
    await RNFS.mkdir(directoryPath);
    console.log(`Directory "${directoryName}" created successfully.`);
  } catch (error) {
    console.error('Error creating directory:', error);
  }
};
