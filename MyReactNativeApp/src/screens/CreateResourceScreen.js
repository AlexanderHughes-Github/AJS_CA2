import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CreateResourceScreen = () => {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await API.post('/resources', { name });
      // Handle response or navigate
    } catch (error) {
      console.log('Error creating resource', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <Button title="Create" onPress={handleSubmit} />
    </View>
  );
};

export default CreateResourceScreen;
