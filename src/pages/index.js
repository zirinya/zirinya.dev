import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
const Home = () => {
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
          <Link to="/about" className="notesLink">
            More about me...
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
