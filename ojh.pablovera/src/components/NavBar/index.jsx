import React from 'react'
import CarWidget from '../CarWidget';
import "./styles.css";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light m-3">
      <div className="container-fluid">
        <a className="navbar-brand BrandName" href="/#">OJH SANITARIOS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle ul-link" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Líneas de baño
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item ul-link fs-16" href="/#">Andina</a></li>
                <li><a className="dropdown-item ul-link fs-16" href="/#">Marina</a></li>
                <li><a className="dropdown-item ul-link fs-16" href="/#">Temple</a></li>
                <li><a className="dropdown-item ul-link fs-16" href="/#">Varese</a></li>
                <li><a className="dropdown-item ul-link fs-16" href="/#">Veneto</a></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle ul-link" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item ul-link" href="/#">Sanitarios</a></li>
                <li><a className="dropdown-item ul-link" href="/#">Bachas</a></li>
                <li><a className="dropdown-item ul-link" href="/#">Bañeras</a></li>
                <li><a className="dropdown-item ul-link" href="/#">Vanitorys</a></li>

              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active ul-link" aria-current="page" href="/#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active ul-link" aria-current="page" href="/#">Sobre Nosotros</a>
            </li>

          </ul>
          <div className="d-flex mr-2" >
            <CarWidget />
            <h3>0</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}
