import logo from './logo.svg';
import './App.css';
import {TextField} from "@mui/material";
import SuggestionForm from "./components/SuggestionPage/SuggestionForm";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div >
      <header className="App-header">
        <p>
          Restaurant Suggestion
        </p>
        <SuggestionForm/>
      </header>
    </div>
  );
}

export default App;
