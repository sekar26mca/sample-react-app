import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAction } from '../actions/index';
import LoginForm from '../components/LoginForm';
import './Login.css';
//import { fetchCategoriesAction } from '../../category/actions/index';

class Login extends Component {
    render() {
        const { onSubmit } = this.props
        return (
            <>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application<br /> Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            {
                                this.props.invalid && <p className="text-danger">Invalid Creditenial</p>
                            }
                            <LoginForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: loginDetails => {
            LoginAction(dispatch, loginDetails);
        }
    };
};

const mapStateToProps = state => {
    return {
        invalid: state.auth.invalid
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);