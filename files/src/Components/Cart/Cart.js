import {Link} from 'react-router-dom';
import'./Cart.css';
import {AiFillShopping} from 'react-icons/ai'
import React, {useContext, useState} from 'react';
import {CartContext} from '../CartContext';

function Cart() {
    document.title = `Bayern Store | Cart`;

    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [cart, setCart, addToCart, removeFromCart, removeAllFromCart] = useContext(CartContext);

    const sumPrice = cart.reduce((accumulator, currValue) => accumulator + currValue.price, 0)
    const [...cartSet] = new Set(cart);

    const sendOrder = () => {
        setOrderConfirmed(!orderConfirmed)
        setTimeout(() => setOrderConfirmed(false), 2000);
        setTimeout(() => setCart([]), 2000)
    }

    return (
        <div className = 'cart-container'>
            {
                orderConfirmed && <p id = 'confirm-box'>Your order has been sent!</p>
            }
            <h1>You Cart</h1>
            <div className = 'checkOut-container'>
                <p>TOTAL: : {Math.round(sumPrice)} €</p>
                {cart.length === 0 || <button onClick = {() => sendOrder()}>Checkout</button>}
            </div>

            {
                cartSet.length > 0 ? 
                cartSet.map((item) => {
                    //number of product
                    const numOfProduct = cart.filter((cartProduct) => {
                        return cartProduct.name === item.name
                    }).length
                    return (
                        <>
                        <hr className = "hr-line"></hr>
                        <div className = 'cart-card'>
                            <img src = {item.img} alt = {item.name}/>
                            <div className = 'cartInfo-container'>
                                <h3>{item.name} </h3>
                                <p>{item.price} €</p>
                                <br></br>
                                <div className = 'controllCart-container'>
                                    <button onClick = {() => removeFromCart(item)} id = "minus-btn">-</button>
                                    <p>{numOfProduct}</p>
                                    <button onClick = {() => addToCart(item)} id = "plus-btn">+</button>
                                </div>
                                <button onClick = { ()=>removeAllFromCart(item)} className = "removeAll-btn">Remove All</button>
                            </div>
                        </div>
                        </>
                    )
                }) : 
                <div id = "empty-msg">
                    <h1>Your cart is empty<AiFillShopping/></h1>
                    <Link to = '/shop'><button>Go to Store</button>
                    </Link>
                </div>
            }
            
        </div>
    )
}


export default Cart
