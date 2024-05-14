import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { fetchStudents } from './api';  

const LandingPage = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchStudents();
        setStudentData(result.data); 
        setLoading(false);
      } catch (error) {
        console.error('Failed to connect to backend:', error);
        setStudentData([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text>Connected to backend! Fetched {studentData.length} students.</Text>
          <Button title="Log In" onPress={() => navigation.navigate('Login')} />
          <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </>
      )}
    </View>
  );
};

export default LandingPage;
