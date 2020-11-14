import React, { useState } from 'react';
import NameFilterInput from '../../utils/nameFilterInput';
import './buttons.css';

function Buttons() {

    // const [filterState, setFilterState] = useState("");

    // function onFilterChange(event) {
    //     const { value } = event.target;
    //     setFilterState(value);
    // }

    return (
        <div className="ButtonsContainer">
            {/* <NameFilterInput filterState={filterState} onFilterChange={onFilterChange}></NameFilterInput> */}
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