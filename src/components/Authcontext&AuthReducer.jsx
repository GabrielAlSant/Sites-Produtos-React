import {useState, useEffect, createContext, useReducer, useContext} from "react"

export const AuthContextProvider = ({children}) => {
    const [autenticacao, setAutenticacao] = useReducer(AuthReducer, UsuarioInicial)
    
    useEffect(() => {
      localStorage.setItem("usuario", JSON.stringify(autenticacao.usuario));
    }, [autenticacao.usuario]);
    return (
        <AuthContext.Provider value={{usuario : autenticacao.usuario, setAutenticacao}}>
            {children}
        </AuthContext.Provider>
    )
  }
  
  const UsuarioInicial = {
    usuario : JSON.parse(localStorage.getItem("usuario")) || null,
  }
  
  export const AuthContext = createContext(UsuarioInicial);
  
  export const AuthReducer = (autenticacao, tipo) => {
    switch (tipo.type){
        case "LOGIN": {
            return  {
                usuario:tipo.payload,
            }
        }
        case "LOGOUT":{
  return {
    usuario : null,
  }
        }
  
        default: return autenticacao;
    }
  } 