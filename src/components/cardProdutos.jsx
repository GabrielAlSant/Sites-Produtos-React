import React from "react";
import Produtos from "../pages/produtos";
import "../index.css"

export default function CardProdutos(props){
    return(   
        <div className="card tamanho me-4">
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.descricao}</p>
    <p className="card-text">preço:{props.preco}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

