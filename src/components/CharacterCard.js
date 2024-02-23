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
width: 120px;
height: 190px;
border: 2px solid white;
border-radius: 10px;
margin: 0px 10px 10px 10px;`

const CharName = styled.h2`
font-size: 20px;
text-align: center;
width: auto;
height: 35px;
background-color: #201a15;
color: white;
border-top-left-radius: 10px;
border-top-right-radius: 10px;`

const CharacterImage = styled.img`
width: 120px;
height: 190px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;`

export default CharacterCard;
