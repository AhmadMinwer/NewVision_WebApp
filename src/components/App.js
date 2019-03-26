import React, { Component, Fragment } from 'react';
import Groups from './Groups';
import { BrowserRouter as Router } from 'react-router-dom';
// import LoadingBar from 'react-redux-loading'
import NewVisionNav from './NewVisionNav';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          {/* <LoadingBar /> */}
          <div className="App">
            <NewVisionNav />
            <Groups />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
