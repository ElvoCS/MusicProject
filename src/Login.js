import React from 'react';
import fire from './config/fire';
// import "./Home.css";
import { Button, IconButton, Card } from "@material-ui/core";

class Login extends React.Component {

    // Login with email and password
    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log("Successfully Logged In");
        }).catch((err) => {
            console.log("Error: " + err.toString());
        })
    }

    // Sign up with email and password
    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log("Successfully Signed In");
        }).catch((err) => {
            console.log("Error: " + err.toString());
        })
    }

    // Sign in with Google Authentication
    signInWithGoogle() {
        var googleProvider = new fire.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(googleProvider);
    }


    render() {
        return (

            <div className="Home" style={{ textAlign: 'center' }}>
                <button style={{ margin: '10px' }} onClick={this.signInWithGoogle}>Sign in with Google</button>
                <p>OR</p>
                <div style={{ padding: '5px' }}>
                    <input id="email" placeholder="Enter Email" type="text" />
                </div>
                <div style={{ padding: '5px' }}>
                    <input id="password" placeholder="Enter Password" type="text" />
                </div>
                <div>
                    <button style={{ margin: '10px' }} onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;