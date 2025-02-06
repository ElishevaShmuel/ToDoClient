import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

axios.defaults.baseURL = API_URL; 


axios.interceptors.response.use(
  response => response, 
    error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);
let count=0;
export default {
  getTasks: async () => {
    const result = await axios.get(`/Items`)    
    return result.data;
  },

  addTask: async(name)=>{
    count+=1;
    const result=await axios.post(`/Items`,{Name:name,Id:count})
    return result.data
  },

  setCompleted: async(t)=>{
    console.log(t);
    
    const result=await axios.put(`/Items/${t.Id}`,{IsComplete: t.isComplete})
    return result.data
  },

  deleteTask:async(id)=>{   
    const result=await axios.delete(`/Items/${id}`)
    return result.data
  }
};
