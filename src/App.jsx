import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LoginPage from './components/1-loginPage/loginPage';
import SignUpPage from './components/2-signUpPage/signUpPage';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="ss" element={<SignUpPage/>} />
        </Routes>
    </>
  );
}

export default App;
