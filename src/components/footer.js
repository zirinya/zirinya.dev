import * as React from "react"
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="footer" >
            <div> © {year} zirinya</div>
            <div className="footer_social">
                <ul>
                    <a href="https://github.com/zirinya" className='notesLink '>GitHub</a>
                    <a href="https://codepen.io/zirinya" className='notesLink '>Codepen</a>
                </ul>
            </div>
        </div>
    )
}
export default Footer