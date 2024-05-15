import React, { useState } from 'react';
import { register } from '../api/api';
import { Alert } from 'react-native';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
        const data = await register({ email, password });
        console.log('Registration successful:', data);
        Alert.alert("Success", "You are registered successfully!");
        navigation.navigate('Login');
    } catch (error) {
        console.error('Registration failed:', error);
        if (error.response && error.response.data && error.response.data.msg) {
            Alert.alert("Registration Failed", error.response.data.msg);
        } else {
            Alert.alert("Registration Failed", "An unexpected error occurred.");
        }
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
      <Text style={styles.label}>Confirm Password:</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
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

export default SignUpScreen;
