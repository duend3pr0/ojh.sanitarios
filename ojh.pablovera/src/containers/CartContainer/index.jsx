import React, { useContext } from 'react'
import TableRow from './TableRow'
import { Shop } from '../../context/ShopProvider'
import {db}
import { generateOrderObjetc } from "";
const Cart = () => {
  const {products} = useContext(Shop);
  console.log(products)

  const confirmPurchase= ()=>{
    const order = generateOrderObjetc({
      nombre: "sebas",

      
    })

    console.log(order);

    const docRef = await addDoc(collection(db, "orders"),order);


  }


  return (
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Image</th>
          <th scope="col">title</th>
          <th scope="col">price</th>
          <th scope="col">quantity</th>
          <th scope="col">remove</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => {
          return <TableRow key={product.id} product={product}/>
        })}
      </tbody>
      <button onClick={confirmPurchase}>Confirmar compra</button>
    </table>
  )
}

export default Cart