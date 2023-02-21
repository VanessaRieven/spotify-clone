
import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue(); //use data layer value

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //We clean the token from the url for safety reasons, and to look cleaner.
    const _token = hash.access_token; //We get the access token from the hash

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token); //giving the access_token to spotify api

      //get user account info
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      }) 
      
      //get user playlists from spotify
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      })
    }
  }, []);

  return (
    <div className="app">
      { token ? ( <Player spotify={spotify}/> ) : (  <Login />  ) }
    </div>
  );
}

export default App;
