import React from 'react';
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectRoute = ({children}) => {

    const navigate = useNavigate();

    const {isAuthenticated, checkAuth} = useAuthStore();
  
    useEffect(()=>{
  
        checkAuth();
    
      }, [checkAuth]);
 
    return isAuthenticated ? children : navigate("/login");
 
}

export default ProtectRoute