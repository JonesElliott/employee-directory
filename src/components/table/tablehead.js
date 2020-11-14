import React from 'react';
import NameSortLink from '../../utils/namesSortLink';
import DOBSortLink from '../../utils/dobSortLink';

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>Photo</th>
                <th><NameSortLink toggleSortDirection={props.toggleSortDirection} /></th>
                <th>Phone</th>
                <th>Email</th>
                <th><DOBSortLink toggleSortDirectionDate={props.toggleSortDirectionDate} /></th>
            </tr>
        </thead>
    );
}

export default TableHead;