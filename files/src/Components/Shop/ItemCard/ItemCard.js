import React from 'react';
import {Link} from 'react-router-dom';
import {merchData} from '../merchData';
import './ItemCard.css'

function ItemCard({itemData, addToCart}) {
    const {id, name, img, price} = itemData

    const filterItem = () => {
        const [item] = merchData.filter((merch) => {
            return merch.id === Number(id)
        })
        return item
    }

    return (
        <>
        <div className = 'item-card'>
            <Link to = {`/shop/${id}`} style={{ textDecoration: 'none' }}>
                <img src = {img} alt = {name}/>
                <h4>{name}</h4>
            </Link>
            <div className = "price-container">
                <p>{price} €</p>
                <button onClick = {() => addToCart(filterItem())}>Add to cart</button>
            </div>
        </div>
        </>
    )
}

export default ItemCard
