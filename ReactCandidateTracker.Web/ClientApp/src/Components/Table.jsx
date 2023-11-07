import React, { useState,useEffect } from 'react'
import axios from 'axios'
import TableRow from './TableRow'

const Table = ({ status }) => {

    const [candidates, setCandidates] = useState([]);
    const [showNotes, setShowNotes] = useState(false);

    const getCandidates = async () => {
        const { data } = await axios.get(`/api/candidatetracker/getcandidates?status=${status}`)
        setCandidates(data);
    }

    const toggleNotes = () => {
        setShowNotes(!showNotes)
        console.log(showNotes)
    }

    useEffect(() => {
        getCandidates();
    }, [])

    return (
        <div className='container'>
            <button className='btn btn-warning' onClick={toggleNotes }>Toggle Notes</button>
            <div className='row mt-3'>
                <table className='table table-hover table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            {!showNotes && <th>Notes</th> }
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(c => <TableRow key={c.id} candidate={c} showNotes={showNotes } />)}
                    </tbody>
                </table>
            </div>
        </div>
        )
}
export default Table;