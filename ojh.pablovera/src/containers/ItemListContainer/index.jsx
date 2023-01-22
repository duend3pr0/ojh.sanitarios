import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import productJson from '../../data/products';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

console.log(db);

const ItemListContainer = () => {
    
  //*seteo el estado products como un array vacío
    const [products, setProducts] = useState([])

    const {categoryId}  = useParams()
    console.log(categoryId)
    console.log("categoryID")
  

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {
    
    const getProducts =async ()=>{
      let querySnapshot;
      if (categoryId){
        const q = query(collection(db, "products"), where("category", "===", categoryId));
        querySnapshot = await getDocs(q);
      }else {
        querySnapshot = await getDocs(collection(db, "products"));
      }

      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
      const product = {
      id: doc.id,
      ...doc.data()
    }
    productosFirebase.push(product);
  });

    setProducts(productosFirebase)
      
    }
    getProducts()
    console.log(getProducts);



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