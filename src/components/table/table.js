import React, { useState, useEffect } from 'react';
import TableHead from './tablehead';
import TableBody from './tablebody';
import compareNames from '../../utils/compareNames';
import './table.css';

function Table(props) {
    return (
        <table id="employees">
            <TableBody { ...props }/>
        </table>
    );
}

export default Table;