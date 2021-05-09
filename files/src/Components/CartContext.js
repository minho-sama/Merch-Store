//this "technique" is not the best if u wanna change the state, not just render info,
//as it is re-renders everything, but for this project it will be enough
 
import React, {useState, createContext} from 'react';

export const CartContext = createContext()

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (object) => {
        const newCart = [...cart, object];
        setCart(newCart)
    }

    const removeFromCart = (obj) => {
        const indexOfItem = cart.findIndex((element) => element.id === obj.id)
        const cartCopy = [...cart]
        cartCopy.splice(indexOfItem, 1);
        setCart(cartCopy)
    }

    const removeAllFromCart = (obj) => {
        const newCart = cart.filter((item) => {
            return item.id !== obj.id
        })
        setCart(newCart)
    }

    console.log(cart)
    return (
        <CartContext.Provider value = {[cart, setCart, addToCart, removeFromCart, removeAllFromCart]}>
            {props.children}
        </CartContext.Provider>
    )
}