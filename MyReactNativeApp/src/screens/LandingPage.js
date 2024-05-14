import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { fetchStudents } from '../api';  // Assuming fetchStudents is implemented in api.js

const LandingPage = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchStudents().then(students => {
      setData(students);
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching students:', error);
      setLoading(false);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? <ActivityIndicator /> : <Text>Fetched data successfully</Text>}
      {/* Navigation buttons can be added here */}
    </View>
  );
};

export default LandingPage;

