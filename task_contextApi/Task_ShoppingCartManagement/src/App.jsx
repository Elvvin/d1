import React from 'react'
import { CartProvider } from './CartContext'
import ProductList from './ProductList'
import Cart from './Cart'

const App = () => {
    return (
        <CartProvider>
            <div>
                <ProductList />
                <Cart />
            </div>
        </CartProvider>
    )
}

export default App
