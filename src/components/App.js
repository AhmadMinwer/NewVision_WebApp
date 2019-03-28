import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect , Switch } from 'react-router-dom'
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
import {fakeAuth} from './fakeAuth'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === false
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
      )} />
    )

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            {this.props.loading === true
              ? null
              : <div>
                <NewVisionNav />

                <Switch>
                  {/* <PrivateRoute path='/' exact component={Dashboard} /> */}
                  <PrivateRoute path='/' component={Students} />
                  <PrivateRoute path='/students/:id' component={StudentPage} />
                  <PrivateRoute path='/groups' component={Groups} />
                  <PrivateRoute path='/groups/:id' component={GroupPage} />

                  <Route path='/login' component={Login} />
                  <Route component={NotFound} />
                </Switch>
              </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
