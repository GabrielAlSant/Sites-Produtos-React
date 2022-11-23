import React,{useContext} from "react";
import { AuthContext } from "./Authcontext&AuthReducer";
import { useNavigate } from "react-router-dom";

export default function Header(){
  const navigate = useNavigate()
  const {setAutenticacao} = useContext(AuthContext)
  const {usuario} = useContext(AuthContext)
  const handleLogout =(e)=>{
    const user = usuario;
    setAutenticacao({type:"LOGOUT", payload:user})
    navigate("/")
  }
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Bida Revendas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/produtos">Produtos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Autenticar</a>
        </li>
      </ul>
      {usuario &&(<span class="navbar-text" role="search">
         <form class="d-flex" onSubmit={handleLogout}><button className="form-control me-2 btn-outline-light">Logout</button></form>
        </span>)}
    </div>
  </div>
</nav>
    )
}