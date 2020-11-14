import React from 'react';
import TableHead from './tablehead';
import TableRow from './tableRow';
import './table.css';

function TableBody(props) {

    return (
        <div className="test">
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