import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/1-loginPage/loginPage';
import SignUpPage from './components/2-signUpPage/signUpPage';
import Aside from './components/aside/aside';
import AccountVerification1 from './components/3-accountVerfi/verfi-1/accountVerification1';
import AccountVerification2 from './components/3-accountVerfi/verfi-2/accountVerification2';
import AccountVerification3 from './components/3-accountVerfi/verfi-3/accountVerification3';
import AccountVerification4 from './components/3-accountVerfi/verfi-4/accountVerification4';
import Business1 from './components/4-businessVerfi/1-business1/businessPage1';
import Business2 from './components/4-businessVerfi/2-business2/businessPage2';
import './index.css';
import Business5 from './components/4-businessVerfi/5-business5/business5';
import Business6 from './components/4-businessVerfi/6-business6/business6';
import Business7 from './components/4-businessVerfi/7-business7/business7';
import Business8 from './components/4-businessVerfi/8-business8/business8';
import Business9 from './components/4-businessVerfi/9-business9/business9';
import Business10 from './components/4-businessVerfi/10-business10/business10';
import Business11 from './components/4-businessVerfi/11-Business11/business11';
import Business12 from './components/4-businessVerfi/12-business12/business12';
import OverView1 from './components/5-overView/1-overView1/overView1';

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
          <Route path="business5" element={<Business5/>} />
          <Route path="business6" element={<Business6/>} />
          <Route path="business7" element={<Business7/>} />
          <Route path="business8" element={<Business8/>} />
          <Route path="business9" element={<Business9/>} />
          <Route path="business10" element={<Business10/>} />
          <Route path="business11" element={<Business11/>} />
          <Route path="business12" element={<Business12/>} />
          <Route path="overview" element={<OverView1/>} />
          <Route path="aside" element={<Aside/>} />
        </Routes>
    </>
  );
}

export default App;
