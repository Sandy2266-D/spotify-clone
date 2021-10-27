//https://developer.spotify.com/
export const authEndpoint = "https://accounts.spotify.com/authorize"; // End Point
const clientId = "095d663b022743a791e71fb4d04f89cd";
const redirectUri = "http://localhost:3000/";

// Replace with your app's client ID, redirect URI and desired scopes

//User Permissions
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
  )}&response_type=token&show_dialog=true`;