import * as React from 'react'
import { Link } from 'gatsby'
const Navbar = () => {
    return (
        <nav >
            <ul>
                <Link to="/"><li className='ico'></li></Link>
                <Link to="/notes" className='notesLink space-right'>Notes</Link>
                <Link to="/about" className='notesLink space-right'>About</Link>
            </ul>
        </nav>
    )
}
export default Navbar