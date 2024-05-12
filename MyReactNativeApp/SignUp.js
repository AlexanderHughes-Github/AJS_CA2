import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Here you would call your API for signing up the user
    console.log('Signing up', email, password);
    // On success:
    // navigation.navigate('Feed'); // Assuming direct login post-signup
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry={true} value={password} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}
