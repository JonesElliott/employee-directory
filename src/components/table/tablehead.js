import React from 'react';
import NameSortLink from '../../utils/namesSortLink';

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>Photo</th>
                <th><NameSortLink toggleSortDirection={props.toggleSortDirection} /></th>
                <th><a href="#">Phone</a></th>
                <th><a href="#">Email</a></th>
                <th><a href="#">DOB</a></th>
            </tr>
        </thead>
    );
}

export default TableHead;