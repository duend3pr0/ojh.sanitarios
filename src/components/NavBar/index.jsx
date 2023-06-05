import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

export default function NavBar() {
  return (
    <nav className='containerNavBar' >
        <div className="navBar">
        <Link  to="/#"><img src="./Assets/nrp.png" className="imgNavBar" alt="logo" /></Link>
        </div>
         <div className="navBar-container" id="navbarSupportedContent">
          <ul className="navBar-list">
            <li className="">
              <Link className="" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Líneas de baño
              </Link></li>
              <li className="">
              <Link className="" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Líneas de baño
              </Link></li>
              <li className="">
              <Link className="" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Líneas de baño
              </Link></li>
              <li className="">
              <Link className="" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Líneas de baño
              </Link></li>
              <li className="">
              <Link className="" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Líneas de baño
              </Link></li>
              <li className="">
              <Link className="" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Líneas de baño
              </Link></li>

          </ul>
          <div className="d-flex mr-2" >
            <CartWidget/>
          </div>
        </div>
    </nav>
  );
}
