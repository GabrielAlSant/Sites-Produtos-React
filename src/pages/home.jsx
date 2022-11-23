import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

export default function Home(){
    return (
    <div>
    <Header />
    <div class="container card margin-r mt-4">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Sobre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">GitHub</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Nota</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Bida Revendas</h5>
    <p class="card-text">Aqui temos produtos novos e usados.</p>
    <a href="/produtos" class="btn btn-primary">Ir aos produtos</a>
  </div>
</div>

    </div>
    )
}

