import React from 'react';
import styled from 'styled-components';

function CharacterCard(props) {
  return (
    <CharContainer>
        <CharName>{props.name}</CharName>
        <CharacterImage src={props.src} alt={props.name}></CharacterImage>
    </CharContainer>
  );}

const CharContainer = styled.div`
display: flex;
flex-direction:column;
width: 8.8vw;
border: 2px solid white;
border-radius: 10px;
margin: 0px 7px 0px 7px;`

const CharName = styled.h2`
font-size: 29px;
text-align: center;
height: 10px;
width: 169px;
height: 35px;
background-color: #201a15;
color: white;
border-top-left-radius: 10px;
border-top-right-radius: 10px;`

const CharacterImage = styled.img`
width: 169px;
height: 236px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;`

export default CharacterCard;
