import { useState } from 'react';
import './App.css';
import config from './config';
import { useEffect } from 'react';

const apiUrl = config.API_BASE_URL;



function App() {

  const [data, setData] = useState("");


  const fetchData = async () => {
    const url = `${apiUrl}/testMsg`
    const response = await fetch(url);
    const data = await response.json();
    console.log("fetching data...");
    console.log(data);
    if (response.ok) {
      setData(data.message);
    }
  }


  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className="App">
      Hello World!
      <h3>{apiUrl}</h3>
      <p>Data: {data}</p>
    </div>
  );
}

export default App;
