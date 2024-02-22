import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageSelect from '../components/PageSelect';
import StatsPage from './StatsPage'; // add prior data
import ScenarioPage from './ScenarioPage'; // add new battle
import CharacterList from '../components/CharactersList';




export default function HomePage() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    
    useEffect(() => { document.title = `${currentPage} | My Website`}, [currentPage]);

    return (
    <MainContainer> 
        <TitleContainer>
            <h1>GloomHaven Initiative Tracker</h1>
        </TitleContainer>
        <CharacterList/>
        <PageSelect currentPage={currentPage} handlePageChange={handlePageChange}/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
background: radial-gradient(-180px 0px,circle ,#0053ad 100px,#001b85 350px,#000223);`

const TitleContainer = styled.div`
    font: 29px arial;
	display:block;
    text-align: center;
    min-width: 20em;
    width: 50%;
    max-width: 90%;
    margin: auto;
    background-color: #777574;
    border-radius: 10px;
    border-color: white;
    
    h1 { 
        font-size: 2.69vw;
        text-shadow: 0 0 3px #d08d24, 0 0 5px #0000FF;
    }`


const PartyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    width: 100%;`
