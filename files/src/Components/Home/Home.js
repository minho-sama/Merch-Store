import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div>
            <h1 style = {{fontSize: '100px'}}>HomeHome </h1>

            <Link to = '/shop'><button>Visit the Fan Store</button></Link>
        </div>
    )
}

export default Home
