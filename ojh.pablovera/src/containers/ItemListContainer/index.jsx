import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useFirebase from '../../hooks/useFirebase';
import saveFromJSONToFirebase from '../../services/saveFromJSONToFirebase';
import { useEffect } from 'react';


const ItemListContainer = () => {
    
  //*seteo el estado products como un array vacío
  
  const {categoryId}  = useParams()
  console.log(categoryId);
  console.log("mostrando category")
  
  const [products, loading, error] =useFirebase(categoryId)
    // useEffect(()=>{
    //   saveFromJSONToFirebase()
    // },[])
  // Use effect comentado para que cargue solo una vez

  //Este effect se ejecuta cuando se monta el componente
  
  return (
    <>
      {error && <h1>Oh oh hubo un error: {error}</h1>}
      {
        loading ?
          <h1>Cargando... </h1>
          : <ItemList productos={products}/>
      }
    </>
  )
}

export default ItemListContainer