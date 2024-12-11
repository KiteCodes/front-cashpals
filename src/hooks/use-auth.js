import {useState, useEffect} from 'react';
import { useUserContext } from "../providers/UserProvider";
import {setAuth} from '../services/api';

export const useAuth = () => {
    const {setUser, user} = useUserContext()

    useEffect(() => {
      const loggedInUserToken = localStorage.getItem("token");
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
    
      if (loggedInUserToken) {
        setAuth(loggedInUserToken)
        setUser(loggedInUser)
      }
    }, []);

    return {
      isAuthenticated: !!user,
    }
}