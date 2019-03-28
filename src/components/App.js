import React, { Component, Fragment } from 'react';
import StudentPage from './StudentPage';
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
            <StudentPage />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
