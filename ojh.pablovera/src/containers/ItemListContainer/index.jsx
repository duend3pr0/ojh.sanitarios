import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useFirebase from '../../hooks/useFirebase';
import Spinner from 'react-bootstrap/esm/Spinner';
import "./styles.css"


const ItemListContainer = () => {  
  
  const {categoryId}  = useParams()

  
  const [products, loading, error] =useFirebase(categoryId)
   
  return (
    <>
      {error && <h1>Oh oh hubo un error: {error}</h1>}
      {
        loading ?
        <div className='spinnerCustom'>
          <Spinner animation="border" variant="primary" />
            <h1 className='loadingg'>Cargando...</h1>
        </div>
          : 
          <div>
            <h1 className='lineaNombre'> {categoryId}</h1>
             {/* Quisiera poner categoryId en mayúscula pero cuando aplico toUpperCase se me rompe */}
          <ItemList productos={products}/>
          </div>
      }
    </>
  )
}

export default ItemListContainer