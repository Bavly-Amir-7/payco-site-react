import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LoginPage from './components/1-loginPage/loginPage';
import SignUpPage from './components/2-signUpPage/signUpPage';
import Aside from './components/aside/aside';
import AccountVerification1 from './components/3-accountVerfi/verfi-1/accountVerification1';
import AccountVerification2 from './components/3-accountVerfi/verfi-2/accountVerification2';
import AccountVerification3 from './components/3-accountVerfi/verfi-3/accountVerification3';
import AccountVerification4 from './components/3-accountVerfi/verfi-4/accountVerification4';
import Business1 from './components/4-businessVerfi/1-business1/businessPage1';
import Business2 from './components/4-businessVerfi/2-business/businessPage2';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="signup" element={<SignUpPage/>} />
          <Route path="verfi1" element={<AccountVerification1/>} />
          <Route path="verfi2" element={<AccountVerification2/>} />
          <Route path="verfi3" element={<AccountVerification3/>} />
          <Route path="verfi4" element={<AccountVerification4/>} />
          <Route path="business1" element={<Business1/>} />
          <Route path="business2" element={<Business2/>} />
          <Route path="aside" element={<Aside/>} />
        </Routes>
    </>
  );
}

export default App;
