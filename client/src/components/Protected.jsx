import React from 'react'
import { Navigate} from 'react-router-dom';
import Layout from '../Layout';

const Protected = () => {
  const token = localStorage.getItem('token');

  return (
    token ? <Layout /> : <Navigate to="/login" />
  )
}

export default Protected