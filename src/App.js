import './css/App.css';
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import { getTokenFromURL } from "./lib/spotify";
import Dashboard from "./pages/Dashboard";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue();


    useEffect(() => {
        const hash = getTokenFromURL();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token !== null && typeof _token !== "undefined") {
            dispatch({
                type: "SET_TOKEN",
                token: _token
            })
            spotify.setAccessToken(_token);
            spotify.getMe().then(_user => {
                dispatch({
                    type: "SET_USER",
                    user: _user
                });
            });
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists
                })
            });
            spotify.getPlaylist("37i9dQZEVXcMFJuM3h9FVh").then((response) => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response
                });
            });
        }
    }, []);
    return (
        <div className="app">
            {
                token ? <Dashboard spotify={spotify} /> : <Login />
            }
        </  div>
    );
}

export default App;
