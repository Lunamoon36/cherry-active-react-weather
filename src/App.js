import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <Weather />
      <footer>
        This project was coded by
        <a
          href="https://github.com/Lunamoon36"
          class="myProfileLink"
          target="_blank"
          rel='noreferrer'
          ><strong> Cherry Atkinson </strong></a
        >
        and is on
        <a
          href="https://github.com/Lunamoon36/cherry-active-react-weather"
          class="myGitHubLink"
          target="_blank"
          rel='noreferrer'
          ><strong> GitHub </strong></a
        >
        and hosted on
        <a
          href="https://weathercherryplus.netlify.app/"
          class="myNetlifyLink"
          target="_blank"
          rel='noreferrer'
          ><strong> Netlify </strong></a
        >
      </footer>
          </div>
    </div>
  );
}


