import * as React from "react"
import Layout from "../../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { linkHover } from "../pages/page.module.css"

const makeitPurple = {
    color: "#B984DF",
}
const link = {
    fontSize: '20px',
    marginRight: '8px',
}
const socialLink = {
    marginTop: "24px"
}

const Home = ({ data }) => {
  return (
    <Layout pageTitle="Home | zirinya.dev">
      <div>
      <div>
                <h4>About <span style={makeitPurple}>mayz</span></h4>
                <br />
                <h3>Hello there,<br /> My name is <span style={makeitPurple}>"Mayz"</span></h3><br />
                <p>I am Coder who Creative and self-starting<br />Developer who freaking up on every level.</p>
                <div style={socialLink}>
                    <a href="https://github.com/zirinya" > <FontAwesomeIcon style={link} className={linkHover} icon={faGithub} /></a>
                    <a href=" https://codepen.io/zirinya " >  <FontAwesomeIcon style={link} className={linkHover} icon={faCodepen} /></a>
                    <a href="https://www.instagram.com/ayniriz/" >    <FontAwesomeIcon style={link} className={linkHover} icon={faInstagram} /></a>
                    <a href="https://dribbble.com/zirinya">   <FontAwesomeIcon style={link} className={linkHover} icon={faDribbble} /></a>
                </div>
            </div>
      </div>
    </Layout>
  )
}

export const query = graphql`{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        desc
      }
      id
      slug
    }
  }
}
`
export default Home