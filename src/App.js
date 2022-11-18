import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Teste from './pages/teste';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/teste' element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
