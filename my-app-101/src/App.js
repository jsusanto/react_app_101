import logo from './logo.svg';
import './App.css';
import Parent from "./components/Parent"; // Import Parent Component
import FetchDataAPI from "./components/FetchDataAPI"; // Import FetchDataAPI Component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main className="App-body">
        <div>
          <Parent />
        </div>

        <div>
          <FetchDataAPI/>
        </div>
      </main>
      <footer className="App-footer">
        <p>Footer content here</p>
      </footer>
    </div>
  );
}

export default App;
