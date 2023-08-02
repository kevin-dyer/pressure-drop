import logo from './assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Pressure Drop Filtration
        </h1>
        <p>Volitile Acidity, Alcohol and Smoke Taint Reduction</p>
        <a
          className="App-link"
          href="mailto:kevin@pressuredropfiltration.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send an email
        </a>
      </header>
    </div>
  );
}

export default App;
