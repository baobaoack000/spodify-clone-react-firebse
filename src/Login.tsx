import React from 'react'
import "./Login.css"
import { login } from './Spodify'

// eslint-disable-next-line no-console
function Login() {
    return (
        <div className="login">
            <h1>This is login</h1>   
            {/* spodify logo */}
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt=""/>
            {/* login with spotify button */}
            <a href={login}>LOGIN WITH SPODIFY</a>
        </div>
    )
}

export default Login
