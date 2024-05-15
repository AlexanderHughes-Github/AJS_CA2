import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { fetchStudents } from '../api/api'; // Ensure path correctness

const LandingPage = ({ navigation }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        console.error('Failed to fetch students', error);
      }
    };
    loadData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <Text style={styles.subtitle}>Explore our resources:</Text>
      {students.map(student => (
        <View key={student._id} style={styles.item}>
          <Text>{student.name} - {student.email}</Text>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button
          title="Log In"
          onPress={() => navigation.navigate('Login')}
          color="#007BFF"
        />
        <View style={styles.space} />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          color="#28A745"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  space: {
    width: 20,
  },
});

export default LandingPage;
