"use client"
import { useEffect, useState } from "react"

const Page = () =>{
    const [product, setProduct] = useState([])
    useEffect(()=>{
        const getProduct = async () =>{
        let response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        console.log(data)
        setProduct(data.products)
        }
        getProduct()
    },[])
    return(
        <div>
            <h1>Product List</h1>
            {
                product.map((item) => (
                    <h3 key={item.id}>Name : {item.title}, Price: {item.price}</h3>
                ))
            }
        </div>
    )
}

export default Page