import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './css/style.css';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;