
import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //We clean the token from the url for safety reasons, and to look cleaner.
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    console.log("I HAVE A TOKEN >>>> ", token)
  }, []);

  return (
    <div className="app">
      {
        token ? (
        <h1>hello</h1>
        ) : (
        <Login />
        )
      }
    </div>
  );
}

export default App;
