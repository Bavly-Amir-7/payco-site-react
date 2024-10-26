// this is App.js

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useEffect } from 'react';
import { Opacity } from '@mui/icons-material';
import Login from './components/1-loginPage/loginPage';



function App() {



  return (


    <>
      <div id='up' className='container'>
      
      <Login/>


 

      </div>
    </>
  );
}

export default App;
