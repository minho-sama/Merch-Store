import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    document.title = `Bayern Store | Home`
    return (
        <div className = 'home-container'>
            <Link to = '/shop'><button>Visit the Fan Store</button></Link>
        </div>
    )
}

export default Home
