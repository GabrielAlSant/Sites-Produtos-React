import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import api from '../utils/api';
import Header from './header';


export default function ProdutoSolo() {
	let params = useParams()

	const [produtos, setProdutos] = useState([])

	useEffect(() => {
		api
			.get(`/${params.id}`)
			.then(response => {
				setProdutos(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<div >
			<Header></Header>
			<div key={produtos.id}>
			<img src={produtos.img}></img>
					<h2 class="tituloprodutos">{produtos.titulo}</h2>
					<h3 class="desc">{produtos.descricao}</h3>			
			<div class="conteudo">
				{produtos.preco}
			</div>			
			</div>
          
		</div>
	)
}