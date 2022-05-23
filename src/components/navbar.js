import * as React from 'react'
import { Link } from 'gatsby'
const Navbar = () => {
    return (
        <nav >
            <ul>
               <li> <Link to="/"><div className='ico'>Z</div></Link></li>
               <li><Link to="/notes" className='notesLink space-right'>Notes</Link></li>
               <li> <Link to="/about" className='notesLink space-right'>About</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar