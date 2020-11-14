import React from 'react';
import NameSortLink from '../../utils/namesSortLink';
import DOBSortLink from '../../utils/dobSortLink';

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>Photo</th>
                <th><NameSortLink toggleSortDirection={props.toggleSortDirection} /></th>
                <th><a href="#">Phone</a></th>
                <th><a href="#">Email</a></th>
                <th><DOBSortLink toggleSortDirection={props.toggleSortDirection} /></th>
            </tr>
        </thead>
    );
}

export default TableHead;