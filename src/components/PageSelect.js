import React, { useState } from 'react';
import styled from 'styled-components';
import ff7Menu from '../resources/FF7-cursor-move.mp3';


function PageSelect(props) {
  console.log(props);
  const [audio] = useState(new Audio(ff7Menu));
  const playSound = () => {
    audio.play();
  };

  return (
    <MenuContainer>
      <MenuItems>
        <MenuItem onClick={playSound}>
          <MenuLink href="scenario">
            Start New Scenario
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={playSound}>
          <MenuLink href="stats">
            View Old Stats
          </MenuLink>
        </MenuItem>
      </MenuItems>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
display: flex;
flex-wrap: wrap;  
align-items: center;
`
// padding: 10px 32%; // dont know if I need
const MenuItems = styled.ul`
  width: 359px;
  border-radius: 10px;
  border: 3px solid white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style-type: none;
  text-decoration: none;
  // width: 25%;
  box-sizing: border-box;`

const MenuItem = styled.li`
  font-size: 42px;
  margin: 10px;
  flex: 1 0 21%;
  :hover {
    background-color: black;}
`

const MenuLink = styled.a`
color: white;  
padding: 1px;
border-radius: 6px;
text-decoration: none;`

export default PageSelect;
