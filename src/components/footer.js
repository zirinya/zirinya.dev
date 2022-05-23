import * as React from "react"
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="footer" >
            <div> © {year} zirinya</div>
            <div className="footer_social">
                <ul>
                    <li>  <a href="https://github.com/zirinya" className='notesLink '>GitHub</a></li>
                    <li>  <a href="https://codepen.io/zirinya" className='notesLink '>Codepen</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer