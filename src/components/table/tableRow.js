import React from "react";
function TableRow(props) {
    return (
        <tr>
            <td><img alt={props.employeeRecord.name.first} src={ props.employeeRecord.picture.medium}></img></td>
            <td>{props.employeeRecord.name.first} {props.employeeRecord.name.last}</td>
            <td>{props.employeeRecord.phone}</td>
            <td>{props.employeeRecord.email}</td>
            <td>{props.employeeRecord.dob.date.substring(0,10)}</td>
        </tr>
    );
}
export default TableRow;