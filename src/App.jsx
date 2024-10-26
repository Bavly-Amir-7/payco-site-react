// this is App.js

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useEffect } from 'react';
import { Opacity } from '@mui/icons-material';
import LoginPage from './components/1-loginPage/LoginPage';



function App() {



  return (
    <LoginPage />

  );
}

export default App;
