import React from "react";
import { Link  } from "react-router-dom";
import "../index.css"

export default function CardProdutos(props){
    return(   
        <div className="card tamanho me-4 mt-4">
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.descricao}</p>
    <p className="card-text">preço:{props.preco}</p>
    <a href={props.id}><div>Go</div></a>
  </div>
</div>
    )
}

