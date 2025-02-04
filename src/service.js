import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5085'; 


axios.interceptors.response.use(
  response => response, 
    error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/Items`)    
    return result.data;
  },

  addTask: async(name)=>{
    const result=await axios.post(`/Items`,{Name:name})
    return result.data
  },

  setCompleted: async(id, isComplete)=>{
    const result=await axios.put(`/Items/${id}`,{IsComplete: isComplete})
    return result.data
  },

  deleteTask:async(item)=>{
    const result=await axios.delet(`/Items/${item.id}`,item)
    return result.data
  }
};
