import React from "react";
import { Link  } from "react-router-dom";
import "../index.css"

export default function CardProdutos(props){
    return(   
      <div class="card tamanho mb-3 mt-4">
      <div class="row g-0">
        <div class="col-md-2">
          <img src={props.img} class="img-fluid imgprodutos rounded-start" alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
              <h5 class="card-title">{props.titulo}</h5>
            <p class="card-text">{props.descricao}</p>
            <p class="card-text"><small class="text-muted">Preço: {props.preco}</small></p>
            <a href={`/produto/${props.id}`}><button class="btn btn-dark">Ver Produto</button></a>
          </div>
        </div>
      </div>
    </div>
    )
}

