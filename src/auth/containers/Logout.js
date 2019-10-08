import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LogoutAction } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
class Logout extends Component {
    render() {
        const { onLogout } = this.props
        return (
            <span className="btn-link" onClick={onLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
            </span>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            dispatch(LogoutAction());
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Logout);