import React from 'react';
import './card.css';

function Card() {
    return (
        <div className="card">
            <img src="./assets/img/avatar-male-1.png" className="avatar"/>
            <div className="container">
                <p>Name:</p>
                <p>Position:</p>
                <p>Department</p>
                <p>Start Date:</p>
                <p>Birth Date:</p>
                <p>Supervisor:</p>
                <p>Favorite Linux Distro:</p>
            </div>
        </div>
    );
}

export default Card;