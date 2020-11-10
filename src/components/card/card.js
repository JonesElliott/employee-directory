import React from 'react';
import './card.css';

function Card() {
    return (
        <div className="card">
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