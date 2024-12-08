import axios from 'axios';

const i = axios.create({
  baseURL: 'https://back-cashpals.onrender.com'
})

export const login = async ({username, password}) =>{
  const token = btoa(username + ':' + password);
  const response =  await i.post('/signin', {},
  {
    headers: {  
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + token
    }
  }
  );
  setAuth(token);
  localStorage.setItem('user', token)
  return response.data;
}

export const getUsers = async () =>{
  const response = await i.get('/users');
    return response.data;
}

export const register = async (user) => {
  try {
    const response = await i.post('/signup', user); // Adjust endpoint as necessary
    return response.data; // Return the response data
  } catch (error) {
    // Handle error appropriately
    console.error('Error creating user:', error.response?.data || error.message);
    throw error;
  }
};

export const setAuth = async (token) => {
  i.defaults.headers.common.Authorization = `basic ${token}`;
};