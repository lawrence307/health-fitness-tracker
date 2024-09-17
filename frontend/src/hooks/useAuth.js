"manage authentication state"

import { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  const login = async (credentials) => {
    const response = await axios.post('/api/login', credentials);
    const { token } = response.data;
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
