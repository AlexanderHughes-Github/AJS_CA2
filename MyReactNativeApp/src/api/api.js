import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.5.227:3000/api',
});

// Students
export const fetchStudents = async () => {
  try {
    const response = await api.get('/students');
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchStudent = (id) => api.get(`/students/${id}`);
export const createStudent = (student) => api.post('/students', student);
export const updateStudent = (id, student) => api.put(`/students/${id}`, student);
export const deleteStudent = (id) => api.delete(`/students/${id}`);

// Lecturers
export const fetchLecturers = () => api.get('/lecturers');
export const fetchLecturer = (id) => api.get(`/lecturers/${id}`);
export const createLecturer = (lecturer) => api.post('/lecturers', lecturer);
export const updateLecturer = (id, lecturer) => api.put(`/lecturers/${id}`, lecturer);
export const deleteLecturer = (id) => api.delete(`/lecturers/${id}`);

// Modules
export const fetchModules = () => api.get('/modules');
export const fetchModule = (id) => api.get(`/modules/${id}`);
export const createModule = (module) => api.post('/modules', module);
export const updateModule = (id, module) => api.put(`/modules/${id}`, module);
export const deleteModule = (id) => api.delete(`/modules/${id}`);

// StudentModules
export const fetchStudentModules = () => api.get('/studentModules');
export const fetchStudentModule = (id) => api.get(`/studentModules/${id}`);
export const createStudentModule = (studentModule) => api.post('/studentModules', studentModule);
export const updateStudentModule = (id, studentModule) => api.put(`/studentModules/${id}`, studentModule);
export const deleteStudentModule = (id) => api.delete(`/studentModules/${id}`);

//Users
export const register = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const login = userData => api.post('/users/login', userData);

export default api;
