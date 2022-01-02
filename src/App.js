import './App.css';
import Buttons from './components/Buttons/Buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttons />
        <p>{process.env.REACT_APP_BASE_URL}</p>
      </header>
    </div>
  );
}

export default App;
