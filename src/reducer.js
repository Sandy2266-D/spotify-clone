export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    favourite_songs: null,
    top_artists: null,
    playing: false,
    item: null,
    // token:'BQB0sLvZIcj6PB4JtokCj0HzqNzMIk8A3VX1S59VGKwF_C9wESDiPCWZ-qWIqeEdSLtZFJF7InTqqik9EIl8yJm85UJva0VJ24v2bvD0YO_x-G1-w1QCbi-TnrprFAB61Gb-4HE89n1TCHjyp2w7PETgh4P-j7GYNNSvFaP3Oz9Lc4_PHM6_'
  };
  
  const reducer = (state, action) => {
  console.log(action);

    //Switch Case
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_FAVOURITE_SONGS":
        return {
          ...state,
          favourite_songs: action.favourite_songs,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;