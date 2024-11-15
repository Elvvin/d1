import React from 'react'
import { useCart } from './CartContext'
import './styles/styles.css'

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
]

const ProductList = () => {
    const { addToCart } = useCart()

    return (
        <div className='product-list'>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList