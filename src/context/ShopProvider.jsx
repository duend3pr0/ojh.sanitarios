import { useState } from "react"
import { createContext } from "react"

export const Shop = createContext();




const ShopProvider = ({children})=>{
    const [products, setProducts] = useState([])

    const addProduct = (product)=>{
        setProducts([...products, product])

    }
    const countCart = ()=>{
        const cantidadTotal = 0;
        for (const product of products){
            cantidadTotal+= product.quantity;
        }

        }
        return (
            <Shop.Provider value = {{products, addProduct}}>
                {children}
            </Shop.Provider>
        )
    }

    