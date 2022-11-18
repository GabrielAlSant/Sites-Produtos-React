import React,{useEffect, useState} from "react";
import axios from "axios";
import CardProdutos from "../components/cardProdutos";
import api from "../utils/api";
import { Outlet } from "react-router-dom";

export const getServerSideProps = async () => {
    const response = await axios.get('http://localhost:3001/');
    const props = await response.descricao;
   
    return {
      props: {
        props
      }
    };
  };

export default function Produtos(){
    const [produtos, setProdutos] = useState([])

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
    
    return(
        <div><h1>Bem-vindo aos Produtos</h1>
       {
				produtos.map(produto => {
					return (          
						<div key={produto._id}>
							<CardProdutos id={produto._id} titulo={produto.titulo} preco={produto.preco}  descricao={produto.descricao} img={produto.img} />
						</div>       
					)
				})
			}
        </div>
    )
}