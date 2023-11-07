import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AddCandidate from './Pages/AddCandidate';
import Confirmed from './Pages/Confirmed';
import Pending from './Pages/Pending';
import Refused from './Pages/Refused';
import Home from './Pages/Home';
import { StatusCountsContextComponent } from './StatusCountsContextComponent';
import CandidateDetails from './Pages/CandidateDetails'



const App = () => {
    return (
        <StatusCountsContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/addcandidate' element={<AddCandidate />} />
                    <Route exact path='/pending' element={<Pending />} />
                    <Route exact path='/confirmed' element={<Confirmed />} />
                    <Route exact path='/refused' element={<Refused />} />
                    <Route exact path='/candidatedetails/:id' element={<CandidateDetails/> }/>
                </Routes>
            </Layout>
        </StatusCountsContextComponent>
    )
}

export default App;