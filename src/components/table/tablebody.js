import React from 'react';

function TableBody(props) {
    return (
        <tbody>
            {props.results.map(result => (
                <tr key={result.login.uuid}>
                    <td><img alt={result.name.first} src={ result.picture.medium}></img></td>
                    <td>{result.name.first}, {result.name.last}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{result.dob.date}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;