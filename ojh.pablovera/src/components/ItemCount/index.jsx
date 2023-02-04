import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

/**
 * 
 * @param {onAdd} onAdd Function que agrega al carrito de compra
 * @param {stock} stock El stock del producto
 * @param {initial} initial El estado inicial del contador
 * @returns Contador
 */

const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial) setCount(count - 1);
    };

    return (
        <div className="count-container itemDetail">
            <button className="btn btn-primary p-2" onClick={onDecrement}>-</button>
            <span className="count">{count}</span>
            <button className="btn btn-primary p-2" onClick={onPlus}>+</button>
            <button className="btn btn-primary p-2 buttonsCart" onClick={() => onAdd(count)}>
                <Link className="gocart" to="/cart">
                            Agregar al carrito
                </Link></button>
            <button className='btn btn-primary p-2 buttonsCart'>
            <Link to = "/" className='gocart'>Volver al inicio</Link>
          </button>
            
        </div>
    );
};

export default ItemCount;