import React from "react";
import CartWidget from "./CartWidget/CartWidget.jsx";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ABRIGATE</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Todo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mujer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Juvenil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Niña</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tallas extra</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="¿Qué buscas?" aria-label="Search" />
            <button class="btn btn-outline-info btn-outline-success" type="submit">Buscar</button>
          </form>
          <CartWidget items={4}/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;