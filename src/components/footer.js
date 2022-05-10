import * as React from "react"
import { Link } from 'gatsby'
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="footer" >
            <div> © {year} zirinya</div>
            <div className="footer_social">
                <ul>
                    <Link to="https://github.com/zirinya" className='notesLink '>GitHub</Link>
                    <Link to="https://codepen.io/zirinya" className='notesLink '>Codepen</Link>
                </ul>
            </div>
        </div>
    )
}
export default Footer