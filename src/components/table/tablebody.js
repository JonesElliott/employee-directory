import React, { useState, useEffect } from 'react';
import compareNames from '../../utils/compareNames';
import TableHead from './tablehead';
import TableRow from './tableRow';
import './table.css';

function TableBody(props) {

    return (
        <div className="test">
            {/* <NameFilterInput filterState={filterState} onFilterChange={onFilterChange}></NameFilterInput> */}
            <table id="employees">
                <TableHead toggleSortDirection={props.toggleSortDirection}/>
                <tbody>
                    {
                        props.results.map(employeeRecord =>
                            (<TableRow
                                employeeRecord={employeeRecord}
                                key={employeeRecord.id.value} />))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableBody;