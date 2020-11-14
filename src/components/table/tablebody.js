import React, { useState, useEffect } from 'react';
import compareNames from '../../utils/compareNames';
import NameFilterInput from '../../utils/nameFilterInput';
import NameSortLink from '../../utils/namesSortLink';
import Buttons from '../buttons/buttons';
import TableHead from './tablehead';
import TableRow from './tableRow';
import './table.css';

function TableBody(props) {

    // This becomes "this.state = {}"
    const [filteredEmployees, setFilteredEmployees] = useState(props.results);
    const [sortedEmployees, setSortedEmployees] = useState(filteredEmployees);
    const [filterState, setFilterState] = useState("");
    const [sortDirection, setSortDirection] = useState(1);

    // Use effect goes from useEffect to componentDidMount (for startup)
    // and your change function for each update

    useEffect(function () {
        let filteredRecords = props.results;
        if (filterState !== '') {
            filteredRecords = props.results
                .filter(employeeRecord => {
                    return employeeRecord.name.first.startsWith(filterState)
                        || employeeRecord.name.last.startsWith(filterState);
                })
        }
        setFilteredEmployees(filteredRecords);
    }, [props.results, filterState]);
    
    useEffect(function () {
        const filteredEmployeesCopy = filteredEmployees.slice(0);
        filteredEmployeesCopy.sort(compareNames(sortDirection));
        setSortedEmployees(filteredEmployeesCopy);
    }, [filteredEmployees, sortDirection]);

    // These stay basically the same. They just use this.setState
    function onFilterChange(event) {
        const { value } = event.target;
        setFilterState(value);
    }

    function toggleSortDirection(event) {
        event.preventDefault();
        event.stopPropagation();
        setSortDirection(-1 * sortDirection);
    }

    return (
        <div className="test">
            <NameFilterInput filterState={filterState} onFilterChange={onFilterChange}></NameFilterInput>
            <table id="employees">
                <TableHead toggleSortDirection={toggleSortDirection}/>
                <tbody>
                    {
                        sortedEmployees.map(employeeRecord =>
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