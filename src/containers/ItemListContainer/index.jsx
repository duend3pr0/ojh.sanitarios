import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import productJson from '../../data/products';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams()
  console.log(categoryId)

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    //Caso JSON propio
    const getProducts = () => {

      const obtenerProductos = new Promise((res, rej) => {
        setTimeout(()=> {
          res(productJson)
        }, 3000)
      })

      obtenerProductos
      .then( productos => {
        if (categoryId) { 
          const productosFiltradosPorCategoria = productos.filter(producto => producto.category === categoryId) 
          console.log(productosFiltradosPorCategoria) 
          setProducts(productosFiltradosPorCategoria) 
        } else { 
          setProducts(productos) 
        }
      })
      .catch(error => console.log(error))
    }

    getProducts()

  }, [categoryId])

  const handleChange = (event) => {
    const value = event.target.value
    const productsFiltradosPorInput = productJson.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
    setProducts(productsFiltradosPorInput)
  }

  console.log(products)

  return (
    <div>
        <input onChange={handleChange} placeholder='Realice la búsqueda de productos'></input>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer