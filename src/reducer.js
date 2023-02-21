//all these data is accessible from any component

export const initialState = {
       user: null,
       playlists: [],
       playing: false,
       item: null,
       token: "BQDaIV3K_FDuwwORDxmJI9s0ftWI5gFbObyni1plamTiSiw0-VrSYRIh6OW5W9E4BQwEeOBMUokylfvaUe9c0crHihWqbUkCUfbOob0_I4TvDVFqWAhv5h3kA3bfgOtSeLbQoeAfQr69M4yanUk2EE--sAB0937pnLHPumPVXJz2b_L6j1UAeOZVMHexZMcXRHBoIl2umtocwkhEfw"
};
//state is what we currenly have, the action sets the state to what we want, like playing to true or playing to false
const reducer = (state, action) =>  {
       console.log(action);
       switch (action.type) {
              case 'SET_USER':
                     return {
                            ...state, 
                            user: action.user
                     }
              case 'SET_TOKEN':
                     return {
                            ...state,
                            token: action.token
                     }
              case 'SET_PLAYLISTS':
                     return {
                            ...state,
                            playlists: action.playlists
                     }
              case 'SET_PLAYING':
                     return {
                           ...state,
                            playing: action.playing
                     }
              case 'SET_ITEM':
                     return {
                           ...state,
                            item: action.item
                     }
              default: 
                     return state
       }
}

export default reducer;