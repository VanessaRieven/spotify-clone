//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

//end point, where we gonna send the user to in order to authethicate the user
export const authEndpoint = 'https://accounts.spotify.com/authorize';

//Where the redirect will go
const redirectUri = 'http://localhost:3000/';

const clientId = '2445250ec1ae42e499ac8a08d38d823e';

//what we will allow the app to do
const scopes = [
       "user-read-currently-playing",
       "user-read-recently-played",
       "user-read-playback-state",
       "user-top-read",
       "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
       //go to window url, where the # is, 
       return window.location.hash.substring(1).split('&').reduce((initial, item) => {
              var parts = item.split('=');  
              //go to the initial array, for the access token, and decompose it
              initial[parts[0]] = decodeURIComponent(parts[1]);

              return initial;
       }, {});
}

//show_dialog is the interface where we agree with spotify conditions on the login authentication
//scopes will be listed in that dialog, example: View your spotify account data
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;