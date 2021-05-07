import React from 'react'
import './Shop.css'
import {merchData} from './merchData';

function Shop() {
    return (
        <div>
            <h1>Shop</h1>
            {
                merchData.map(item => {
                    return (
                        <img src = {item.img}/>
                    )
                })
            }
        </div>
    )
}

export default Shop
