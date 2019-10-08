import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const UserCard = ({ userDetails }) => (
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-4">
                    {userDetails.gender === 'male' ? <FontAwesomeIcon icon={faUserTie} size="6x" /> : <FontAwesomeIcon icon={faMars} size="6x" />}
                </div>
                <div className="col">
                    <h5 className="card-title">
                        {userDetails.name} (ID: {userDetails.id})
                    </h5>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> {userDetails.email}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> {userDetails.phoneNo}
                    </p>
                </div>
            </div>
        </div>
    </div>
)


export default UserCard;