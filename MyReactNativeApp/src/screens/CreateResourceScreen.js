import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { createStudent } from '../api/api'; 

const CreateStudentScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateStudent = async () => {
    try {
      const student = { name, email };
      const created = await createStudent(student);
      console.log('Student created:', created);
      navigation.goBack(); // Navigate back or to a success page
    } catch (error) {
      console.error('Error creating student:', error);
      // Display an error message or alert
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Create Student" onPress={handleCreateStudent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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

export default CreateStudentScreen;
