// CreateUser.js
import React from 'react';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard';
import { fetchUsersAction } from './../actions/';

class UserListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.users.map((user, index )=> (
                            <div key={'mykey' + index} className="col-sm-4 my-1">
                                <UserCard userDetails={user} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => fetchUsersAction(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListContainer);
