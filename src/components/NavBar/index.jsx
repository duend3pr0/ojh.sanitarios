import React from "react";
import './styles.css';
import CartWidget from '../CartWidget'
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/">Brand</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/inodoro">inodoro</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/bidet">bidet</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/deposito">deposito</Link>
            </li>
            
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    );
}
