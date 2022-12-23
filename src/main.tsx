import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';

// import dotenv from "dotenv";
// dotenv.config()


axios.defaults.baseURL = import.meta.env.REACT_APP_API || 'http://localhost:3001/api'
// const client =import.meta.env.GOOGLE_CLIENT as string

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT as string}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)