import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import API from '../api/api';

const DetailViewScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [itemDetails, setItemDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await API.get(`/resources/${itemId}`);
        setItemDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch details', error);
        Alert.alert('Error', 'Failed to fetch details');
      }
    };

    fetchDetails();
  }, [itemId]);

  const handleDelete = async () => {
    try {
      await API.delete(`/resources/${itemId}`);
      Alert.alert('Success', 'Resource deleted successfully');
      navigation.goBack(); // Return to list after deletion
    } catch (error) {
      console.error('Error deleting resource', error);
      Alert.alert('Error', 'Failed to delete resource');
    }
  };

  const handleEdit = () => {
    // Navigate to an edit screen, passing the current item details
    navigation.navigate('EditResourceScreen', { itemDetails });
  };

  if (isLoading) {
    return <View style={styles.center}><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text>Details of {itemDetails.name}</Text>  // Customize based on your data
      <Button title="Edit" onPress={handleEdit} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DetailViewScreen;
