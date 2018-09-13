import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Main from './components/main';
import Location from './components/location';
import PlayerView from './components/player-view';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD5H0Rt5A5663j9sjFGUtqhPHzUMzX7gAc",
  authDomain: "dow-app-639b5.firebaseapp.com",
  databaseURL: "https://dow-app-639b5.firebaseio.com",
  storageBucket: "dow-app-639b5.appspot.com"
}

firebase.initializeApp(config);
const rootRef = firebase.database().ref().child('test');
rootRef.on('value', snap => {
  console.log(snap.val());
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <Route path="/" exact render={
            () => { return (
              <div className="app">
                <Main />
                <div className="loc-container">
                  <Location num="1" sur="3" zom="4" loc="police-station"/>
                  <Location num="2" sur="3" zom="4" loc="grocery-store"/>
                  <Location num="3" sur="4" zom="4" loc="school"/>
                  <Location num="4" sur="3" zom="3" loc="library"/>
                  <Location num="5" sur="4" zom="4" loc="hospital"/>
                  <Location num="6" sur="2" zom="3" loc="gas-station"/>
                </div>
              </div>
            )}}/>

          <Route path="/player1" exact render={
            () => { return (
              <div className="app">
                <PlayerView player="1" />
              </div>
            )}}/>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();