// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { fetchStudents, fetchLecturers, fetchModules } from '../api/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LandingPage = ({ navigation }) => {
//   const [students, setStudents] = useState([]);
//   const [lecturers, setLecturers] = useState([]);
//   const [modules, setModules] = useState([]);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       checkAuthStatus();
//     });
//     loadData();
//     return unsubscribe;
//   }, [navigation]);

//   useEffect(() => {
//     if (authenticated) {
//       loadData();
//     }
//   }, [authenticated]);

//   const loadData = async () => {
//     const studentData = await fetchStudents();
//     const lecturerData = await fetchLecturers();
//     const moduleData = await fetchModules();
//     setStudents(studentData);
//     setLecturers(lecturerData);
//     setModules(moduleData);
//   };

//   const checkAuthStatus = async () => {
//     const token = await AsyncStorage.getItem('userToken');
//     setAuthenticated(!!token);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Welcome to My App!</Text>
//       {!authenticated ? (
//         <View style={styles.buttonContainer}>
//           <Button title="Log In" onPress={() => navigation.navigate('Login')} color="#007BFF" />
//           <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} color="#28A745" />
//         </View>
//       ) : (
//         <View style={styles.sectionsContainer}>
//           <RenderSection data={students} title="Students" navigation={navigation} type="Student" />
//           <RenderSection data={lecturers} title="Lecturers" navigation={navigation} type="Lecturer" />
//           <RenderSection data={modules} title="Modules" navigation={navigation} type="Module" />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const RenderSection = ({ data, title, navigation, type }) => (
//   <View style={styles.section}>
//     <Text style={styles.sectionHeader}>{title}</Text>
//     {data.map(item => (
//       <TouchableOpacity key={item._id} onPress={() => navigation.navigate(`${type}Details`, { id: item._id })}>
//         <Text style={styles.itemText}>{item.name || `${item.student_fname} ${item.student_lname}` || item.module_name}</Text>
//       </TouchableOpacity>
//     ))}
//     <Button title={`Add ${type}`} onPress={() => navigation.navigate(`Create${type}`)} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   sectionsContainer: {
//     width: '100%',
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   itemText: {
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//     justifyContent: 'space-around',
//     width: '100%',
//   },
// });

// export default LandingPage;



import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchStudents, fetchLecturers, fetchModules } from '../api/api';

const LandingPage = ({ navigation }) => {
  const [students, setStudents] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [modules, setModules] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const init = async () => {
      const token = await AsyncStorage.getItem('userToken');
      const authStatus = !!token;
      setAuthenticated(authStatus);
      console.log('Authentication Status:', authStatus);

      console.log('Fetching data...');
      const studentsData = await fetchStudents();
      const lecturersData = await fetchLecturers();
      const modulesData = await fetchModules();

      console.log('Students:', studentsData);
      console.log('Lecturers:', lecturersData);
      console.log('Modules:', modulesData);

      setStudents(studentsData);
      setLecturers(lecturersData);
      setModules(modulesData);
    };

    init();
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Students</Text>
        {students.map(student => (
          <Text key={student._id} style={styles.itemText}>
            {student.student_fname} {student.student_lname}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Lecturers</Text>
        {lecturers.map(lecturer => (
          <Text key={lecturer._id} style={styles.itemText}>
            {lecturer.lecturer_fname} {lecturer.lecturer_lname}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Modules</Text>
        {modules.map(module => (
          <Text key={module._id} style={styles.itemText}>
            {module.module_name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  itemText: {
    fontSize: 16,
    marginVertical: 5,
  }
});

export default LandingPage;


