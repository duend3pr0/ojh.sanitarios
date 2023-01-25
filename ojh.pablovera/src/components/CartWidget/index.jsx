import React, { useContext }  from 'react'
import {BsCart4} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {Shop} from '../../context/ShopProvider'



const CartWidget = () => {

  const {countCart} = useContext(Shop);
   
  
  return (
    <Link to="/cart">
    <BsCart4 size={45}/>
    <span>{countCart()}</span>
    </Link>
    
  )
}

export default CartWidget
