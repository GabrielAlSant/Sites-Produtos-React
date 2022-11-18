import React from "react";
import Produtos from "../pages/produtos";
import "../index.css"

export default function CardProdutos(props){
    return(   
        <div class="card tamanho">
  <img src={props.img} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.titulo}</h5>
    <p class="card-text">{props.descricao}</p>
    <p class="card-text">preço:{props.preco}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

