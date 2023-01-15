import React from "react";
import './styles.css';
import CartWidget from '../CartWidget'
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <ul className="nav-list">
            <li className="nav-item">
           
                <Link to="/"><img src="Assets/logo.png" alt="Logo de la empresa"  /> </Link>
            </li>
            <li className="nav-item">
                <Link to="/category/inodoro">Inodoros</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/bidet">Bidets</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/deposito">Depósitos</Link>
            </li>
            
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    );
}
