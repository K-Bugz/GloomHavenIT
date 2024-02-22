import React from 'react';
import styled from 'styled-components';
import CharacterCard from '../components/CharacterCard.js';

function CharacterList(props) {

    // This will come from TEXAS BOIS party api in the future. 
    var partyGroup = [
      {
        name: 'BoneSaw',
        race: 'Human',
        class: 'SawBones',
        src: 'https://gloomhaven.smigiel.us/public/images/byid/86.portrait.webp',
        logo: 'http://www.w3.org/2000/svg',
        style: 'Healing Support'
       },
      {
        name: 'Manny Trejo',
        race: 'Inox',
        class: 'Hatchet',
        src: 'https://gloomhaven.smigiel.us/public/images/byid/92.portrait.webp',
        logo: 'http://www.w3.org/2000/svg',// need to update
        style: 'High Damage'
       },
       {
        name: 'Puni J',
        race: 'Valrath',
        class: 'Red Guard',
        src: 'https://gloomhaven.smigiel.us/public/images/byid/93.portrait.webp',
        logo: 'http://www.w3.org/2000/svg', // need to update
        style: 'Tank'
       },
       {
        name: 'Valrath Sunkeeper',
        race: 'Valrath',
        class: 'Sunkeeper',
        src: 'https://gloomhaven.smigiel.us/public/images/byid/78.portrait.webp',
        logo: 'http://www.w3.org/2000/svg', // need to update
        style: 'Healing Support'
       }]


  return (
    <CharactersContainer>
      {partyGroup.map((partyGroup, index) => ( <CharacterCard key={index} {...partyGroup} /> ))}
    </CharactersContainer>
  );
}

const CharactersContainer = styled.div`
margin-top: 21px;
font-size: large;
display: flex;
justify-content: center;
flex-wrap: wrap;
border: 5px;
border-radius: 6px;

:hover {
  border-radius: 6px;
  background-color: yellow;}`

export default CharacterList;
