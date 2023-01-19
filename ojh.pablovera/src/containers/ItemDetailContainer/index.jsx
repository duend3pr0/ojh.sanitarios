import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import productJson from '../../data/products.json';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    //CASO JSON propio
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  const productDetail = {
    id: docSnap.id,
    ...docSnap.data()
  }
  setDetail(productDetail)

} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


      obtenerProducto
      .then( productos => {
        if (id) { 
          const detalleProducto = productos.find(producto => producto.id.toString() === id) 
          console.log(detalleProducto) 
          setDetail(detalleProducto) 
        }
      })
      .catch(error => console.log(error))
    }

    getProductDetail()

    
  }, [id])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer