import React from 'react';

function Buttons() {
    return (
        <div>
            <button>Add New Employee</button>
            <button>Sort</button>
            <select>
                <option>First Name</option>
                <option>Last Name</option>
                <option>Position</option>
                <option>Department</option>
                <option>Start Date</option>
                <option>Birth Date</option>
                <option>Supervisor</option>
                <option>Favorite Linux Distro</option>
            </select>
        </div>
    );
}

export default Buttons;