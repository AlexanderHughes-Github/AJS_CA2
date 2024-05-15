import React, { useState } from 'react';
import { login } from '../api/api';
import { Alert } from 'react-native';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Submitting:', { email, password });  // Log submission data
    try {
        const data = await login({ email, password });
        console.log('Login successful:', data);
        navigation.navigate('Landing');
    } catch (error) {
        console.error('Login failed:', error);
        Alert.alert("Login Failed", error.response?.data?.msg || "An unexpected error occurred");
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    marginBottom: 10,
  }
});

export default LoginScreen;
