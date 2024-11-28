import axios from 'axios';

const i = axios.create({
  baseURL: 'http://localhost:8080'
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
  return response.data;
}

export const getUsers = async () =>{
  const response = await i.get('/users');
    return response.data;
}

// Function to create a user
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

const setAuth = async (token) => {
  i.defaults.headers.common.Authorization = `basic ${token}`;
};