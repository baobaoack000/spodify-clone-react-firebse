//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
//https://developer.spotify.com/documentation/general/guides/authorization-guide/

//go to spodify login page
export const authorization =
"https://accounts.spotify.com/authorize";
//return home
const redirectUri = "https://localhost:3000/";
//dashboard
const clientID ="cadeb5b192254c6b9c6bc88fb9be5632";
const scopes = [
    "user-read-recently-played",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
]