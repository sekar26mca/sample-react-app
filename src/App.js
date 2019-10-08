import React from 'react';
import { connect } from 'react-redux';
import Login from './auth/containers/Login';
import DashboardPage from './layout/components/Dashboard';
import './App.css';


class App extends React.Component {

  render() {
    const { auth: { auth } } = this.props;
    console.log('isLogin', auth);
    return (
      <>
        {auth ? <DashboardPage /> : <Login />}
      </>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth || {auth: {auth:false}}
  }
}

export default connect(
  mapStateToProps
)(App);
