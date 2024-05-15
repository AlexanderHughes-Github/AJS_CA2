import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import API from '../api/api';

const ResourceListScreen = ({ navigation }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await API.get('/resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <View>
      <FlatList
        data={resources}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailView', { itemId: item.id })}>
            <Text>{item.name}</Text> // Customize according to your data structure
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ResourceListScreen;

