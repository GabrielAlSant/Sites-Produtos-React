import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
    <div><h1>Olá Mundo!</h1>
      <Link to="/produtos">Produtos</Link>
    </div>
    )
}