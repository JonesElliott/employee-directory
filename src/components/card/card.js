import React from 'react';
import './card.css';

function Card(props) {
    return (
        <div className="card">
            <img src="./assets/img/avatar-male-1.png" className="avatar"/>
            <div className="container">
                <p>Name: {props.name}</p>
                <p>Position: {props.position}</p>
                <p>Department {props.department}</p>
                <p>Pay Rate: {props.payRate}</p>
            </div>
        </div>
    );
}

export default Card;