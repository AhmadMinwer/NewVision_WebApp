import React, { Component, Fragment } from 'react';
import Students from './Students';
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
            <Students />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
