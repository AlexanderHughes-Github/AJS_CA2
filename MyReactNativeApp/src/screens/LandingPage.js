import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { fetchStudents, fetchLecturers, fetchModules } from '../api/api'; // Adjust the import path as needed

const LandingPage = ({ navigation }) => {
  const [students, setStudents] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const studentData = await fetchStudents();
      console.log('Students:', studentData); // Should log an array of objects
      setStudents(studentData);
  
      const lecturerData = await fetchLecturers();
      console.log('Lecturers:', lecturerData); // Should log an array of objects
      setLecturers(lecturerData);
  
      const moduleData = await fetchModules();
      console.log('Modules:', moduleData); // Should log an array of objects
      setModules(moduleData);
    } catch (error) {
      console.error('Error loading data', error);
    }
  };
  
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <Text style={styles.subtitle}>Explore our resources:</Text>

      <Text style={styles.sectionHeader}>Students</Text>
      {students.length > 0 ? students.map(student => (
        <Text key={student._id} style={styles.itemText}>
          {student.student_fname} {student.student_lname}
        </Text>
      )) : <Text>Loading students...</Text>}

      <Text style={styles.sectionHeader}>Lecturers</Text>
      {lecturers.length > 0 ? lecturers.map(lecturer => (
        <Text key={lecturer._id} style={styles.itemText}>
          {lecturer.lecturer_fname} {lecturer.lecturer_lname}
        </Text>
      )) : <Text>Loading lecturers...</Text>}

      <Text style={styles.sectionHeader}>Modules</Text>
      {modules.length > 0 ? modules.map(module => (
        <Text key={module._id} style={styles.itemText}>
          {module.module_name}
        </Text>
      )) : <Text>Loading modules...</Text>}

      <View style={styles.buttonContainer}>
        <Button
          title="Log In"
          onPress={() => navigation.navigate('Login')}
          color="#007BFF"  // Primary button color
        />
        <View style={styles.space} />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          color="#28A745"  // Secondary button color
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
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
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  space: {
    width: 20,
  },
});

export default LandingPage;



