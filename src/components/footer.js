import * as React from "react"
const year = new Date().getFullYear();
const footer = {
fontSize:"10px",
textAlign:"center",
color:"#D3D3D3"
}
const Footer = () => {
    return (
        <div style={footer}>© {year} zirinya </div>
    )
}
export default Footer