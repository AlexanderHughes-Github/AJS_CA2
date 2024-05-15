import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import API from '../api/api'; // Assuming API is set up with Axios and includes the bearer token

const EditResourceScreen = ({ route, navigation }) => {
  const { itemDetails } = route.params;
  const [name, setName] = useState(itemDetails.name);  // Assume 'name' is part of your resource schema

  const handleSave = async () => {
    try {
      // Assuming your API requires an ID and updates are done via PUT
      // Adjust this URL and payload according to your actual API endpoints and requirements
      const response = await API.put(`/resources/${itemDetails.id}`, { name });
      Alert.alert('Success', 'Resource updated successfully');
      navigation.goBack(); // Navigate back after success
    } catch (error) {
      console.error('Error updating resource', error);
      Alert.alert('Error', 'Failed to update resource');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Resource Name"
      />
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 18
  }
});

export default EditResourceScreen;
