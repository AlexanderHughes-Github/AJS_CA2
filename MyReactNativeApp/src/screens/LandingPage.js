import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchStudents } from '../api/api';

const LandingPage = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStudents().then(data => {
      setStudents(data);
      setLoading(false);
    }).catch(err => {
      setError('Failed to connect to backend: ' + err.message);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <Text style={styles.success}>Fetched {students.length} students successfully!</Text>
      )}
      {/* For adding navigation buttons or other content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  }
});

export default LandingPage;

