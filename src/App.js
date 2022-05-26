import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Questions from './components/Questions/questions'
import Login  from './components/Login/login';
import HomePage from './components/HomePage/homePage';
import Register from './components/Register/register';


//<Route path='*' element={<Navigate to="homePage"/>} />

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Main/>
      <Footer/>
      <Questions/>
      
     
    </div>
  );
}

export default App;
