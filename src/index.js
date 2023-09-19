import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import userStore from './store/UserStore';
import deviceStore from './store/DeviceStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new userStore(),
    device: new deviceStore(),
  }}>
    <App />
  </Context.Provider>
);
