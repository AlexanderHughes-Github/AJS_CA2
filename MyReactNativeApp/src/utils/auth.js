import AsyncStorage from '@react-native-async-storage/async-storage';

// Store the JWT token in AsyncStorage
const storeToken = async (userToken) => {
  try {
    await AsyncStorage.setItem('userToken', userToken);
  } catch (e) {
    console.error('Failed to save the token', e);
  }
};

// Retrieve the JWT token from AsyncStorage
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (e) {
    console.error('Failed to fetch the token', e);
  }
};

// Remove the JWT token from AsyncStorage
const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (e) {
    console.error('Failed to remove the token', e);
  }
};

export { storeToken, getToken, removeToken };
