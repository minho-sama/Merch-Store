import React, {useState} from 'react'
import './Shop.css'
import {merchData} from './merchData';
import ItemCard from './ItemCard/ItemCard';
import {Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'

function Shop() {

    const [merchArray, setMerchArray] = useState(merchData)
    const [searchValue, setSearchValue] = useState('');

    const filterByCategory = (category) => {
        const filteredByCategoryArr = merchData.filter((merch) => merch.category === category)
        setMerchArray(filteredByCategoryArr)
    }

    //searchbar
    const filteredMerch = merchArray.filter(merch => merch.name.toLowerCase().includes(searchValue.toLowerCase()));

    const [cart, setCart] = useState([]); //ezt a state vart léne eljuttatni Cartba és navbarba useContext-tel

    const addToCart = (object) => {
        const newCart = [...cart, object];
        setCart(newCart)
    }
    console.log(cart)

    return (
        <div>
            <div className = 'filter-container'>

                <div className = 'search-container'>
                    <BsSearch style = {{position: 'absolute', left: '-24px', top: '6px', color:'crimson'}}/>
                    <input type = 'text' value = {searchValue} onChange = {(e) => setSearchValue(e.target.value)} placeholder = 'search'/>
                    { searchValue.length === 0 || <button onClick = {() => setSearchValue('')}>x</button>}
                </div>
                <div className = "filterBtn-container">
                    <button onClick = {() => setMerchArray(merchData)}>All</button>
                    <button onClick = {() => filterByCategory('clothes')}>Clothes</button>
                    <button onClick = {() => filterByCategory('accessories')}>Accessories</button>
                    <button onClick = {() => filterByCategory('fanworld')}>Fanworld</button>
                </div>
            </div>

            <div className = "shop-container">
            {
                filteredMerch.map((item) => {
                        return (
                            <ItemCard key = {item.id} itemData = {item} addToCart = {addToCart}/>
                        ) 
                })
            }
                            
            </div>
        </div>
    )
}

export default Shop
