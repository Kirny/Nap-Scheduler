import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {
  render() {
    return (
    <GoogleLogin
        clientId="537518584002-o3572knurf9jn9b8tqm9335q549l3m5i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn='true'
    />
    );
  }
}

export default App;
