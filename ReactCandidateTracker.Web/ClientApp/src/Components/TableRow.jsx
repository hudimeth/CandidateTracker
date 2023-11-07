import React from 'react'
import {Link } from 'react-router-dom'

const TableRow = ({ candidate, showNotes }) => {
    const { id, firstName, lastName, phoneNumber, email, notes } = candidate

    return (
        <tr>
            <td><Link to={`/candidatedetails/${id}`}>View Details</Link></td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            {!showNotes && <td>{notes }</td> }
        </tr>
    )
}

export default TableRow;