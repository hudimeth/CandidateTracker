import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useStatusCounts } from '../StatusCountsContextComponent'

const CandidateDetails = () => {

    const [candidate, setCandidate] = useState({})
    const { id } = useParams();
    const { updatePendingCount, updateConfirmedCount, updateRefusedCount } = useStatusCounts();

    const getCandidate = async() => {
        const { data } = await axios.get(`/api/candidatetracker/getcandidatebyid?id=${id}`)
        setCandidate(data);
        console.log(candidate)
    }

    useEffect(() => {
        getCandidate();
    }, [])

    const onButtonClick = async (status) => {
        await axios.post('/api/candidatetracker/updatecandidatestatus', { ...candidate, status });
        await updatePendingCount();
        await updateConfirmedCount();
        await updateRefusedCount();
        getCandidate();
    }

    return (
        <div className='container pt-5'>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {candidate.firstName} {candidate.lastName }</h4>
                        <h4>Email: { candidate.email}</h4>
                        <h4>Phone: {candidate.phoneNumber}</h4>
                        <h4>Status: {candidate.status}</h4>
                        <h4>Notes: </h4>
                        <p>{candidate.notes}</p>
                        {candidate.status === 'Pending' && <div>
                            <button className="btn btn-primary" onClick={() => onButtonClick('Confirmed')}>Confirm</button>
                            <button className="btn btn-danger" onClick={() => onButtonClick('Refused')}>Refuse</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CandidateDetails;
