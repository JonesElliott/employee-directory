import React from 'react';
import './modal.css';

function Modal() {
    return (
        <div className="container" id="new-employee-form">
            <form>
                <label>First Name: </label>
                <input></input>
                <br></br>
                <label>Last Name: </label>
                <input></input>
                <br></br>

                <div className="position">
                    <label>Position: </label>
                    <select>
                        <option>Help Desk</option>
                        <option>System Administrator</option>
                        <option>Web Developer</option>
                        <option>Finance Officer</option>
                        <option>HR Rep</option>
                    </select>
                </div>
                
                <div className="department">
                    <label>Department: </label>
                    <select>
                        <option>IT</option>
                        <option>Finance</option>
                        <option>HR</option>
                    </select>
                </div>

                <div className="radio-buttons">
                    <input className="radio-items" id="hourly" type="radio" name="paytype" value="hourly"></input>
                    <label className="radio-items" htmlFor="hourly" id="hourly-label">Hourly</label>
                    <input className="radio-items" id="salary" type="radio" name="paytype" value="salary"></input>
                    <label className="radio-items" htmlFor="salary" id="salary">Salary</label>
                </div>
            </form>
        </div>
    );
}

export default  Modal;