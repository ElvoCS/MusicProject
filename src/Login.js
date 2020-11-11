import React from 'react';
import fire from './config/fire';

class Login extends React.Component {

    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log("Successfully Logged In");
        }).catch((err) => {
            console.log("Error: " + err.toString());
        })
    }

    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log("Successfully Signed In");
        }).catch((err) => {
            console.log("Error: " + err.toString());
        })
    }

    // Sign into Firebase using popup auth & Google as the identity provider
    // signInWithGoogle() {
    //     var provider = new fire.auth.GoogleAuthProvider();
    //     fire.auth().signInWithPopup(provider);
    // }

    // // Returns the signed-in user's profiler pic URL
    // getProfilerPicUrl() {
    //     return fire.auth().current
    // }

    render() {
        return (
            // <div style={{ textAlign: 'center' }}>
            //     <div>
            //         <div>Email</div>
            //         <input id="email" placeholder="Enter Email" type="text" />
            //     </div>
            //     <div>
            //         <div>Password</div>
            //         <input id="password" placeholder="Enter Password" type="text" />
            //     </div>
            //     <button style={{ margin: '10px' }} onClick={this.login}>Login</button>
            //     <button style={{ margin: '10px' }} onClick={this.signUp}>Sign Up</button>
            // </div>

            <div style={{ textAlign: 'center' }}>
                <button style={{ margin: '10px' }}>Sign in with Google</button>
                <p>OR</p>
                <div style={{ padding: '5px' }}>
                    <input id="email" placeholder="Enter Email" type="text" />
                </div>
                <div style={{ padding: '5px' }}>
                    <input id="password" placeholder="Enter Password" type="text" />
                </div>
                <button style={{ margin: '10px' }} onClick={this.signUp}>Create an Account</button>
            </div>
        )
    }
}

export default Login;