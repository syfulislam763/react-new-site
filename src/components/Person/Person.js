import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    //console.log(props.person);
    const {img, name, email, city, salary} = props.person;
    return (
        <div className="wrap">
            <div className="person">
                <div className="thumbnails">
                    <img src={img} alt="image"/>
                </div>
                <div className="content">
                    <h4>Name: {name}</h4>
                    <p>E-mail: {email}</p>
                    <p>City: {city}</p>
                    <p style={{fontWeight:600}}>Salary: ${salary}</p>
                    <button className="button" onClick={() => props.addUsers(props.person)}><FontAwesomeIcon icon={faPlusCircle} />join with us</button>
                </div>
            </div>
        </div>
    );
};

export default Person;