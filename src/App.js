import React,{useContext} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';

import Home from './pages/home';
import Teste from './pages/teste';
import Produtos from './pages/produtos';
import CardProdutos from './components/cardProdutos';
import ProdutoSolo from './components/produtoSolo';
import Header from './components/header';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import { AuthContext } from './components/Authcontext&AuthReducer';

function App() {
  const {usuario} = useContext(AuthContext)
  const ProtecaoDeRota = ({children}) =>{
    return usuario ? children : <Login />
  }
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/teste' element={<Teste />} />
      <Route path='/produtos' element={<ProtecaoDeRota><Produtos /></ProtecaoDeRota>} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastrar' element={<Cadastrar />} />
      <Route path='/produto/:id' element={<ProtecaoDeRota><ProdutoSolo /></ProtecaoDeRota>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
