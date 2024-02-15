import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageSelect from '../components/PageSelect';
import StatsPage from './StatsPage';
import ScenarioPage from './ScenarioPage';



export default function HomePage() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);
    useEffect(() => { document.title = `${currentPage} | My Website`}, [currentPage]);
    
    return (
    <MainContainer> 
        <TitleContainer>
            <h1>GloomHaven Initiative Tracker</h1>
        </TitleContainer>
        <PartyContainer>

        </PartyContainer>
        <PageSelect currentPage={currentPage} handlePageChange={handlePageChange}/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
 
`

const TitleContainer = styled.div`
    text-align: center;
    min-width: 20em;
    width: 50%;
    max-width: 90%;
    margin: auto;
    background-color: #777574;
    border-radius: 10px;
    h1 { 
        font-size: 95.5 vw;
        text-shadow: 0 0 3px #d08d24, 0 0 5px #0000FF;
    }
    
    `


const PartyContainer = styled.div``
