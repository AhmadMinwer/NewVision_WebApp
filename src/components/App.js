import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux';
import NewVisionNav from './NewVisionNav'
import { handleInitialData } from '../actions/shared'
import Students from './Students'
import StudentPage from './StudentPage'
import Groups from './Groups'
import GroupPage from './GroupPage'
import NotFound from './NotFound'
import Login from './Login'
import CMS from './CMS'
import NewStudent from './NewStudent'
import NewGroup from './NewGroup'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    
  }
  render() {

    return (
      <Router>
        <Fragment>
          <LoadingBar />
                <NewVisionNav />

                  <Route path='/' exact component={Students} />
                  <Route path='/students' exact  component={Students} />
                  <Route path='/students/id:id' component={StudentPage} />
                  <Route path='/students/add' component={NewStudent} />
                  <Route path='/groups' exact component={Groups} />
                  <Route path='/groups/id:id' component={GroupPage} />
                  <Route path='/groups/add' component={NewGroup} />
                  <Route path='/settings' exact component={CMS} />

                  
                  <Route path='/login' component={Login} />

        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
