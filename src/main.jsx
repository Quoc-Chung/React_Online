import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from "react-redux";
import count_store from './store/count_store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={count_store}>
  <React.StrictMode>
 
      <App />
   
  </React.StrictMode>
  </Provider>
);
