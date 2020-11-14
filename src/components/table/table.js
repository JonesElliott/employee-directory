import React, { useState, useEffect } from 'react';
import TableHead from './tablehead';
import TableBody from './tablebody';
import './table.css';

function Table(props) {
    return (
        <table id="employees">
            <TableHead />
            <TableBody { ...props }/>
        </table>
    );
}

export default Table;