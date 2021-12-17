import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import firebase from 'firebase'
// import { initializeApp } from 'firebase/app';
//////////////////////////////////////////////////////////////////////
import Home from './components/Home'
import ReadContract from "./components/contract/ReadContract";
import NewContract from "./components/contract/NewContract"
import EditContract from "./components/contract/EditContract"
/////////////////////////////////////////////////////////////////////

const firebaseConfig = {
  apiKey: "AIzaSyDMIYTv9Fqo0E24rzhGW9QrsVMVVk9TXkY",
  authDomain: "contract-tracker-react.firebaseapp.com",
  projectId: "contract-tracker-react",
  storageBucket: "contract-tracker-react.appspot.com",
  messagingSenderId: "781426338852",
  appId: "1:781426338852:web:1e866139e23c558aa1fcb1",
  measurementId: "G-1RGFLF1GVS"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
/////////////////////////////////////////////////////////////////////

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="container">
          <Router>
            <Routes>

              <Route exact path="/" element={ <Home />} />
              <Route exact path="/contract/new" element={ <NewContract/> }/>
              <Route exact path="/contract/:id" element={ <ReadContract/> }/>
              <Route exact path="/contract/:id/edit" element={ <EditContract/>}/>
            </Routes>
          </Router>
        </div>
        
      </div>)
  };
}

export default App;
