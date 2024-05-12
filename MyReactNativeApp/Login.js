import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Here you would call your API for logging in the user
    console.log('Logging in', email, password);
    // On success:
    // navigation.navigate('Feed');
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry={true} value={password} />
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}
