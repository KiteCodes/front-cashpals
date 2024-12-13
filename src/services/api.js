import axios from 'axios';

const i = axios.create({
  baseURL: 'https://back-cashpals.onrender.com'
})

// AUTH RELATED

export const login = async ({username, password}) => {
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
  localStorage.setItem('token', token)
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
}

export const setAuth = async (token) => {
  i.defaults.headers.common.Authorization = `basic ${token}`;
}

// USER RELATED

export const getUsers = async () => {
  const response = await i.get('/user');
    return response.data;
}

export const getUserById = async (id) => {
  const response = await i.get('/user/' + id)
    return response.data
}

export const getUsersByGroupId = async (id) => {
  const response = await i.get('/user/party/' + id)
  return response.data
}

export const modifyUser = async (id, user) => {
  const response = await i.put('/user/' + id, user)
    return response.data
}

export const deleteUser = async (id) => {
  const response = await i.delete('/user/' + id)
    return response.data
} 

export const getContacts = async (id) => {
  const response = await i.get('/user/contacts?id=' + id)
    return response.data
}

export const saveContacts = async (contactList) => {
  const response = await i.put('/user/contacts', contactList)
    return response.data
}

// GROUPS RELATED

export const getGroups = async () => {
  const response = await i.get('/party')
  return response.data
}

export const getGroupsByUserId = async (id) => {
  const response = await i.get('/party/user/' + id)
  return response.data
}

export const createGroup = async (group) => {
  const response = await i.post('/party', group)
    return response.data
}

export const getGroupById = async (id) => {
  const response = await i.get('/party/' + id)
    return response.data
}

export const modifyGroupById = async (id, group) => { // delete group es ahora disable group, no se borran
  const response = await i.put('/party/' + id, group)
    return response.data
} 

export const deleteGroup = async (id) => {
  const response = await i.delete('/party/' + id)
    return response.data
}

// EVENT RELATED 

export const getEvents = async () => {
  const response = await i.get('/event')
    return response.data
}

export const getEventsByGroupId = async (id) => {
  const response = await i.get('/events/' + id)
    return response.data
}

export const createEvent = async (event) => {
  const response = await i.post('/event', event)
   return response.data
} 

export const getEventById = async (id) => {
  const response = await i.get('/event/' + id)
   return response.data
}

export const modifyEvent = async (id, event) => {
  const response = await i.put('/event/' + id, event)
    return response.data
}

export const deleteEvent = async (id) => {
  const response = await i.delete('/event/' + id)
    return response.data
}

// TRANSACTION RELATED 

export const getTransactions = async () => {
  const response = i.get('/transaction')
    return response.data
}

export const createTransaction = async (transaction) => {
  const response = i.post('/transaction', transaction)
    return response.data
}

export const getTransactionById = async (id) => {
  const response = i.get('/transaction/' + id)
    return response.data
}

export const modifyTransaction = async (id, transaction) => {
  const response = i.put('transaction/' + id, transaction)
    return response.data
}

export const deleteTransaction = async (id) => {
  const response = i.delete('/transaction/' + id)
    return response.data
}

export const getTransactionByDebtorId = async (id) => {
  const response = i.get('/transaction/debtor/' + id)
    return response.data
}

export const getTransactionByIndebtedId = async (id) => {
  const response = i.get('/transaction/indebted' + id)
    return response.data
}