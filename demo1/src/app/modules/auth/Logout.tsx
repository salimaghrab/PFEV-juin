import {useEffect} from 'react'
import {Navigate, Routes} from 'react-router-dom'
import axios from 'axios';

export function Logout() {
  const logout = async () => {
    try {
      await axios.post('https://localhost:7074/api/Account/logout');
      // Logout was successful
      // Add any additional logic or state updates as needed
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
  useEffect(() => {
    logout();
  }, []);
  return (
    <Routes>
      <Navigate to='/auth/login' />
    </Routes>
  )
}
