import './App.css';
import config from './config';

const apiUrl = config.API_BASE_URL  || 'Fallback URL';


function App() {
  return (
    <div className="App">
      Hello World!
      <h3>{apiUrl}</h3>
    </div>
  );
}

export default App;
