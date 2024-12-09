import {setAuth} from '../services/api';
import {useEffect} from 'react';
import {useUserContext} from '../providers/UserProvider';
   

export const localToken = () =>{
   
   useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
         setAuth(loggedInUser);
      }
   }, []);
}