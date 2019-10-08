import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import UserList from './../../users/containers/UserList';

class DashboardPage extends React.Component {

  render() {
    return (
      <div>
        <AppHeader />
        <UserList />
      </div>
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
)(DashboardPage);
