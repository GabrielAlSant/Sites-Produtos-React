import React,{useEffect, useState} from "react";
import axios from "axios";
import CardProdutos from "../components/cardProdutos";
import api from "../utils/api";
import { Outlet, Link  } from "react-router-dom";


export default function Produtos(){
    const [produtos, setProdutos] = useState([])
	const [consulta, setConsulta] = useState("");

	useEffect(() => {
		api
			.get('/')
			.then(response => {
				setProdutos(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])
    
	const filtro = (item) => {
		return item.filter((item) =>
		  keys.some((key) => item[key].toLowerCase().includes(consultaGeral))
		);
	  };
	  const keys = ["titulo"];

	  const consultaGeral = consulta.toLowerCase();

    return(
        <div><h1>Bem-vindo aos Produtos</h1>
		 <form className="" role="search">
          <input
            className="form-control filtro"
            type="search"
            placeholder="Pesquisar"
            aria-label="Search"
            onChange={(e) => setConsulta(e.target.value)}
          />
        </form>
      <div className="d-flex">
	 {
				filtro(produtos).map(produto => {
					return (          
						<div key={produto.id}>
							<CardProdutos id={produto.id} titulo={produto.titulo} preco={produto.preco}  descricao={produto.descricao} img={produto.img} />
						</div>       
					)
				})
			}

	  </div>
        </div>
    )
}