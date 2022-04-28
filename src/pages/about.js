import * as React from "react";
import Layout from "../components/layout";
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className="aboutList">
        <h2 className="topicHeading">About</h2>
        <p>
          Hi, I am May I'm currently a Front-end developer in Bangkok Thailand.
          Nice to meet you~
          <br />
          I am into web front-end development even I still mess up and struggle
          sometimes.
          <br />
          <br />I built this website to write (in 🇹🇭) some things general,
          basic, opinions and important <br /> include tech and some things I am
          into at that time.
          <br />
          feel free to connect with me on github
        </p>
        <h2 className="topicHeading">Year Resolution.</h2>
        <ul>
          <li>Learn 70% day of 100%.</li>
          <li>Find a new job.</li>
        </ul>
        <h2 className="topicHeading">Interested in</h2>
        <ul>
          <li>Sleep Such as how to sleep tight etc.</li>
          <li>Book: Fictional, Manga, Webtoon online.</li>
          <li>
            Coffee: I thing love ice amaricano I trying to taste every cafe
            around my apartment.
          </li>
          <li>Series: both western and easten.</li>
          <li>Language: especially English and Japanese</li>
        </ul>
        <h2 className="topicHeading">Fun facts</h2>
        <ul>
          <li>I love Cats.</li>
          <li>I love Pastel pink and violet color.</li>
          <li>I love walk on my plans.</li>
          <li>
            I love to spent my time drawing my lovely jelly fish. why not ? look
            up at my favicon
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default AboutPage;
