import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <h1>
                <Link to='/'>Ecommerce</Link>
                </h1>
                <ul>
                    <li><Link to='/user/login'>Login</Link></li>
                    <li><Link to='/purchases'>Purchases</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header