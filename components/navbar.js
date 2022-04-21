import * as React from 'react'
import { Link } from 'gatsby'
import './navbar.css'

const Navbar = () => {
    return (
        <nav >
            <ul >
                <li ><Link to="/"><div className='ico'></div></Link></li>
            </ul>
        </nav>
    )
}
export default Navbar