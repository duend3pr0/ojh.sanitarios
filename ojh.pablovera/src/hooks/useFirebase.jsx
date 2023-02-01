import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../firebase/config';

const useFirebase = (categoryId) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //Este effect se ejecuta cuando se monta el componente
    useEffect(()=> {
        try {
            setLoading(true);

            const getProducts = async () => {
                let querySnapshot;
                if (categoryId) {
                    console.log(categoryId)
                    const q = query(collection(db, "products"), where("category"||"title" , "==", categoryId));
                    querySnapshot = await getDocs(q);
                } else {
                    querySnapshot = await getDocs(collection(db, "products"));
                }
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                    const product = {
                    id: doc.id,
                    ...doc.data()
                    }
                    productosFirebase.push(product)
                });
                setProducts(productosFirebase)
                console.log(products)
                setLoading(false)
            }

            getProducts();
            
        } catch (error) {
            setError(error.message)
        }
    }, [categoryId])
        
    return [products, loading, error]
}

export default useFirebase