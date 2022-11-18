import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';

import Home from './pages/home';
import Teste from './pages/teste';
import Produtos from './pages/produtos';
import CardProdutos from './components/cardProdutos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/teste' element={<Teste />} />
      <Route path='/produtos' element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
