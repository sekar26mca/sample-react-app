import React from 'react';
import Logout from './../../auth/containers/Logout';

const AppHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand" href="./">Employee App</a>
            <div className="nav navbar-nav navbar-right">
                <div>
                    <Logout />
                </div>
            </div>
        </nav>
    )
}

export default AppHeader;