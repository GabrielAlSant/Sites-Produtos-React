import React, {useContext,useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Header from "../components/header";
import { AuthContext, AuthReducer } from "../components/Authcontext&AuthReducer";


export default function Cadastrar(){
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const firebaseConfig = {
      apiKey: "AIzaSyByb_EZAx46xerjZA-0jm2857wwhR3OhBw",
      authDomain: "projeto-reactauth.firebaseapp.com",
      projectId: "projeto-reactauth",
      storageBucket: "projeto-reactauth.appspot.com",
      messagingSenderId: "423449502619",
      appId: "1:423449502619:web:eca31e9cbbbaaca29cb73e"
    };
    
    const app = initializeApp(firebaseConfig);
    const {setAutenticacao} = useContext(AuthContext)
    const navitage = useNavigate()

    const handleRegister = (e) => {
        const auth = getAuth();
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setAutenticacao({type:"LOGIN", payload:user})
            navitage("/")
          })
          .catch((error) => {
            setError(true);
          });
      };

      
    return (
        <div>
            <Header/>
            <div className="container-fluid g-0">
      <form onSubmit={handleRegister} className="container mt-2">
        <fieldset className="border rounded p-3 mt-2">
          <legend className="container navbar navbar-expand-lg bg-light verde">
            {" "}
            Cadastro de Usuário
          </legend>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Login
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Titulo"
              aria-describedby="basic-addon1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Senha
            </span>
            <input
              type="password"
              className="form-control"
              aria-label="Titulo"
              aria-describedby="basic-addon1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <span className="error">
              Ops, Algo deu errado, tente novamente ou contate a administração.
            </span>
          )}
          <br />
          <button type="submit" className="btn btn-dark mt-2">
            Cadastrar
          </button>
          <a href="/"><button type="button" className="btn btn-secondary ms-2 mt-2">
            Cancelar
          </button></a>
        </fieldset>
      </form>
    </div>
        </div>
    )
}