import React from 'react';
import TableBody from './tablebody';
import './table.css';

function Table(props) {
    return (
        <table id="employees">
            <TableBody { ...props }/>
        </table>
    );
}

export default Table;