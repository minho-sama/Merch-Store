import React from 'react';
import {merchData} from '../merchData';
import './ItemPage.css';

function ItemPage({match}) {
    
    const [item] = merchData.filter((merch) => {
        return merch.id === Number(match.params.id)
    })

    document.title = `Store | ${item.name}`
    
    return (
        <div className = 'item-page'>
            <img src = {item.img} alt = {item.name}/>

            <div className = 'item-info-container'>
                <label>{item.price}</label>
                <button>add to cart</button>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemPage
