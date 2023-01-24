import React, { useContext }  from 'react'
import {BsCart4} from 'react-icons/bs'
import {Shop} from '../../context/ShopProvider'


const CartWidget = () => {

  const {countCart} = useContext(Shop);
  
  console.log(countCart)
  console.log("countCartttt");

  return (
    <>
    <BsCart4 size={45}/>
    {/* <span>{countCart()}</span> */}
    </>
    
  )
}

export default CartWidget
