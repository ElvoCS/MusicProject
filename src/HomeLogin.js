import React from 'react';
import fire from './config/fire';

class HomeLogin extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>You are logged in</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default HomeLogin;