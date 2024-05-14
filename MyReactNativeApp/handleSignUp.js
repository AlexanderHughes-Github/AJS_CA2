import axios from 'axios';

const handleLogin = async () => {
  try {
    const response = await axios.post('https://your-backend-url/api/login', {
      email,
      password
    });
    console.log('Login successful', response.data);
    navigation.navigate('Feed');
  } catch (error) {
    console.error('Login failed', error);
  }
};
