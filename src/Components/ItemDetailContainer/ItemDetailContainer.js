import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect (() => {
        getProductById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [productId])

    return (
    <div>
        <h1> Detalle del producto</h1>
        <div>
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <ItemCount />
        </div>
    </div>
    )
}

export default ItemDetailContainer