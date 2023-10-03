import logo from './logo.svg';
import './App.css';
import {TextField} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <TextField id="filled-basic" label="Restaurant name" variant="filled" />
        </form>
      </header>
    </div>
  );
}

export default App;
