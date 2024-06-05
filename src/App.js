import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <Weather defaultCity="Lisbon" />
      <footer>
        This project was coded by
        <a
          href="https://github.com/Lunamoon36"
          className="myProfileLink"
          target="_blank"
          rel='noreferrer'
          ><strong> Cherry Atkinson </strong></a
        >
        and is on
        <a
          href="https://github.com/Lunamoon36/cherry-active-react-weather"
          className="myGitHubLink"
          target="_blank"
          rel='noreferrer'
          ><strong> GitHub </strong></a
        >
        and hosted on
        <a
          href="https://weathercherryplus.netlify.app/"
          className="myNetlifyLink"
          target="_blank"
          rel='noreferrer'
          ><strong> Netlify </strong>
          </a>
        </footer>
      </div>
    </div>
  );
}


