import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar.';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// npm install react-router-dom@5


export default class App extends Component {

  state = {
    progress : 0
  }

  setProgress = (prog) =>{
    this.setState({progress:prog})
  }

  render() {
    return (
      // npm install react-router-dom  & npm install react-router-dom@5
      <Router>
        <NavBar />
        {/* npm i react-top-loading-bar */}
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Switch>

          <Route exact path="/"><News changeProgress={this.setProgress}  key='general' pagesize={6} country='in' category='general' /></Route>
          <Route exact path="/business"><News changeProgress={this.setProgress}  key='business' pagesize={6} country='in' category='business' /></Route>
          <Route exact path="/entertainment"><News changeProgress={this.setProgress}  key='entertainment' pagesize={6} country='in' category='entertainment' /></Route>
          <Route exact path="/health"><News changeProgress={this.setProgress}  key='health' pagesize={6} country='in' category='health' /></Route>
          <Route exact path="/science"><News changeProgress={this.setProgress}  key='science' pagesize={6} country='in' category='science' /></Route>
          <Route exact path="/sports"><News changeProgress={this.setProgress}  key='sports' pagesize={6} country='in' category='sports' /></Route>
          <Route exact path="/technology"><News changeProgress={this.setProgress}  key='technology' pagesize={6} country='in' category='technology' /></Route>

        </Switch>
      </Router>

    )
  }

}
