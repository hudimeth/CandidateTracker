import { useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

import { useStatusCounts } from '../StatusCountsContextComponent'
const AddCandidate = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();

    const { updatePendingCount } = useStatusCounts();

    const onSubmitClick = async () => {
        await axios.post('/api/candidatetracker/addcandidate', { firstName, lastName, email, phoneNumber, notes, status: 'pending' })
        await updatePendingCount();
        navigate('/');
    }

    return (<>
        <div className="row" style={{marginTop: 80}} >
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="form-control" />
                    <br></br>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="form-control" />
                        <br></br>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control"/>
                        <br></br>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" className="form-control"/>
                    <br></br>
                    <textarea rows="5" className="form-control" value={notes} onChange={(e) => setNotes(e.target.value) } />
                    <br></br>
                    <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                </div>
            </div>
        </div>
    </>
    )
}
export default AddCandidate;