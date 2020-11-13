import React, { useState, useEffect } from 'react';
import TableHead from './tablehead';
import TableBody from './tablebody';
import compareNames from '../../utils/compareNames';
import './table.css';
import EmployeeResults from '../../App';

function Table(props) {
    return (
        <table id="employees">
            <TableHead />
            <TableBody { ...props }/>
        </table>
    );
}

export default Table;