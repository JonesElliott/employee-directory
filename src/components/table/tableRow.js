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

// return (
//         <tbody>
//             {props.results.map(result => (
//                 <tr key={result.login.uuid}>
//                     <td><img alt={result.name.first} src={ result.picture.medium}></img></td>
//                     <td>{result.name.first}, {result.name.last}</td>
//                     <td>{result.phone}</td>
//                     <td>{result.email}</td>
//                     <td>{result.dob.date}</td>
//                 </tr>
//             ))}
//         </tbody>
//     );