import React from 'react';
import './buttons.css';

function Buttons() {
    return (
        <div className="ButtonsContainer">
            <button className="buttons buttonItem">Sort</button>
            <select className="buttons selector buttonItem">
                <option>First Name</option>
                <option>Last Name</option>
                <option>Phone</option>
                <option>Email</option>
                <option>DOB</option>
            </select>
        </div>
    );
}

export default Buttons;