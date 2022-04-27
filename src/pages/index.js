import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
const Home = ({ data }) => {
  return (
    <Layout pageTitle="Home | zirinya.dev">
      <div>
        <div>
          <br />
          <h1>
            Hello there,
            <br /> My name is <span>"Mayz"</span>
          </h1>
          <p>
            I am Coder who Creative and self-starting
            <br />
            Developer who freaking up on every level.
          </p>
          <Link to="/about">more about me</Link>
          {/* <a href="">more about me</a> */}
          {/* <div style={socialLink}>
            <a href="https://github.com/zirinya">
              {" "}
              <FontAwesomeIcon
                style={link}

                icon={faGithub}
              />
            </a>
            <a href=" https://codepen.io/zirinya ">
              {" "}
              <FontAwesomeIcon
                style={link}

                icon={faCodepen}
              />
            </a>
            <a href="https://www.instagram.com/ayniriz/">
              {" "}
              <FontAwesomeIcon
                style={link}

                icon={faInstagram}
              />
            </a>
            <a href="https://dribbble.com/zirinya">
              {" "}
              <FontAwesomeIcon
                style={link}

                icon={faDribbble}
              />
            </a>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
