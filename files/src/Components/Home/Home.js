import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import {MdKeyboardArrowRight} from 'react-icons/md'

function Home() {
    document.title = `Bayern Store | Home`
    return (
        <div className = 'home-container'>
            <h1>M I A</h1>
            <h1>S A N</h1>
            <h1>M I A</h1>
            <div className = 'btn-container'>
            <Link to = '/shop'><button>Visit the Fan Store <MdKeyboardArrowRight className = "arrow"/> 
            </button></Link>
            </div>
        </div>
    )
}

export default Home
