import React, {useContext, useState} from 'react';
import {merchData} from '../merchData';
import './ItemPage.css';
import {CartContext} from '../../CartContext';
import {Link} from 'react-router-dom';

function ItemPage({match}) {
    const [item] = merchData.filter((merch) => {
        return merch.id === Number(match.params.id)
    })
    document.title = `Store | ${item.name}`

    const [cart, setCart, addToCart] = useContext(CartContext);
    const [orderAdded, setOrderAdded] = useState(false);

    const addItemToCart = () => {
        setOrderAdded(!orderAdded)
        setTimeout(() => setOrderAdded(false), 2000);
        addToCart(item)
    }
     
    return (
        <div className = 'item-page'>
            <img src = {item.img} alt = {item.name}/>

            <div className = 'item-info-container'>
                <h1>{item.name}</h1>
                <hr></hr>
                <p>{item.description}</p>
                <label>{item.price} €</label>
                <button onClick = {() => addItemToCart()}>add to cart</button>
                {
                orderAdded && <p id = 'addedOrder-msg'>{item.name} added to your cart!</p>
                }
                <div className = "itempage-link-btns">
                    <Link to = '/shop'><button id = "go-back-btn">Go Back to Store</button></Link>
                    {cart.length === 0 ||<Link to = '/cart'><button>Proceed to Checkout</button></Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemPage
