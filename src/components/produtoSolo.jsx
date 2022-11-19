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
			<div className='text-center mt-4 mb-3 container'>
			<div className="cardsolo" key={produtos.id}>
         <div className="row g-0">
    <div className="col-md-4">
      <img src={produtos.img} className="imgsolo" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card card-body">
        <h5 className="card-title">{produtos.titulo}</h5>
        <p className="card-text">{produtos.descricao}</p>
        <p className="card-text"><small className="text-muted">{produtos.preco}</small></p>
      </div>
    </div>
   </div>
   </div>
			</div>
          <a href='/produtos'>Voltar</a>
		</div>
	)
}
