import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import  './styles/index.css';
import UserContext from './context/userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <UserContext>
      <App />
      </UserContext>
    </NextUIProvider>
  </React.StrictMode>
);