import logo from './assets/images/logo.svg';
import styled from 'styled-components';
import { ThemeProvider } from "@material-ui/core/styles";
import customtheme from "./theme";

import TopBar from './components/TopBar';
import Home from './components/Home';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <ThemeProvider theme={customtheme}>
      <AppContainer className="App">
        <TopBar/>
        <Home/>
        {/* <header className="App-header">
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
        </header> */}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100vh;
`