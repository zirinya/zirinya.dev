import * as React from 'react'
import Navbar from './navbar'
import "../src/styles/reset.css"
import { layoutContainer } from './layout.module.css'
import Footer from './footer'
const Layout = ({ pageTitle, children }) => {
  return (
    <div >
      <title>{pageTitle} </title>
      <Navbar />
      <main className={layoutContainer}>
        {children}
      </main>
      <footer><Footer/></footer>
    </div>
  )
}
export default Layout