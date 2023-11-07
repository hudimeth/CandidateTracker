import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'

const StatusCountsContext = createContext();

const StatusCountsContextComponent = ({ children }) => {

    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);

    const updatePendingCount = async () => {
        const { data } = await axios.get('/api/candidatetracker/getcounts?status=pending')
        setPendingCount(data);
    }

    const updateConfirmedCount = async () => {
        const { data } = await axios.get('/api/candidatetracker/getcounts?status=confirmed')
        setConfirmedCount(data);
    }

    const updateRefusedCount = async () => {
        const { data } = await axios.get('/api/candidatetracker/getcounts?status=refused')
        setRefusedCount(data);
    }

    useEffect(() => {
        updatePendingCount();
        updateConfirmedCount();
        updateRefusedCount();
    }, [])

    return (
        <StatusCountsContext.Provider value={{ pendingCount, updatePendingCount, confirmedCount, updateConfirmedCount, refusedCount, updateRefusedCount }}>
            {children}
        </StatusCountsContext.Provider>
    )
}

const useStatusCounts = () => {
    return useContext(StatusCountsContext);
}

export { StatusCountsContextComponent, useStatusCounts }
