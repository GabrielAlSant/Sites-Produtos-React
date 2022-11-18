import React from "react";
import Produtos from "../pages/produtos";

export default function CardProdutos(props){
    return(
        <div class="card-body">
        <div>
            <span class="autor">{props.titulo} </span>
            <span class="autor">{props.preco}</span>
        </div>
         <h5>{props.descricao}</h5>
    </div>
    )
}