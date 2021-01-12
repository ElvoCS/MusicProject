import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from "./components/Header";
import Song from "./pages/Song";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";


describe('App', () => {
   it('Renders App without crashing', () => {
      const appWrapper = shallow(<App />);
    });

    it('Renders Home without crashing App.js', () =>{
          const appWrapper = shallow(<App />);
          appWrapper.find(Header);
    })
    it('Renders Song without crashing App.js', () =>{
              const appWrapper = shallow(<App />);
              appWrapper.find(Song);
        })
    it('Renders Footer without crashing App.js', () =>{
              const appWrapper = shallow(<App />);
              appWrapper.find(Footer);
        })
    it('Renders Profile without crashing App.js', () =>{
              const appWrapper = shallow(<App />);
              appWrapper.find(Profile);
        })
    it('Renders Home without crashing App.js', () =>{
              const appWrapper = shallow(<App />);
              appWrapper.find(Home);
        })
    it('Renders Login without crashing App.js', () =>{
              const appWrapper = shallow(<App />);
              appWrapper.find(Login);
        })
    it('Renders CreateAccount without crashing App.js', () =>{
              const appWrapper = shallow(<App />);
              appWrapper.find(CreateAccount);
        })
});


