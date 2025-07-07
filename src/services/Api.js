import axios from 'axios';

// Fetch data from a sample API
export const fetchApiData = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
};