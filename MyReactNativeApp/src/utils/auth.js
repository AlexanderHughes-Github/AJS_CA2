import AsyncStorage from '@react-native-async-storage/async-storage';

// Check if the user is logged in by checking the presence of a token
export const isLoggedIn = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return !!token; // Convert token to boolean: true if exists, false if not
  } catch (error) {
    console.error('Failed to fetch the token', error);
    return false;
  }
};

export default { isLoggedIn };
