import React from 'react'
import { useContext } from 'react'
import {BsCart4} from 'react-icons/bs'
import {Shop} from 


const CarWidget = () => {

  const {countCart} = useContext(Shop)
  console.log(countCart)
  console.log("countCart");

  return (
    <>
    <BsCart4 size={45}/>
    <span>{countCart}</span>
    </>
    
  )
}

export default CarWidget
