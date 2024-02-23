import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageSelect from '../components/PageSelect';
import CharacterList from '../components/CharactersList';

export default function HomePage() {

    return (
    <MainContainer> 
        <TitleContainer>
            <h1>GloomHaven Initiative Tracker</h1>
        </TitleContainer>
        <CharacterList/>
        <PageSelectContainer>
            <PageSelect/> 
        </PageSelectContainer>
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
    background-color: #267eff;
    border: 2px solid white;
    border-radius: 10px;
    h1 { 
        font-size: 2.69vw;
        text-shadow: 0 0 3px #00ffce, 0 0 5px #c20eff;
    }`

const PageSelectContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`