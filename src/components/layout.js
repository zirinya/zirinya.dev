import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/style.css";
const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Navbar />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;
