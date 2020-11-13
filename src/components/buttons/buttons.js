import React from 'react';
import './buttons.css';

function Buttons() {
    return (
        <div className="ButtonsContainer">
            <button className="buttons buttonItem">Add New Employee</button>
            <button className="buttons buttonItem">Sort</button>
            <select className="buttons selector buttonItem">
                <option>First Name</option>
                <option>Last Name</option>
                <option>Position</option>
                <option>Department</option>
                <option>Hourly</option>
                <option>Salary</option>
            </select>
        </div>
    );
}

export default Buttons;