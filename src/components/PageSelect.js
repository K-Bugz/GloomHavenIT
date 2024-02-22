import React from 'react';
import useSound from 'use-sound';
import styled from 'styled-components';
import ff7Menu from '../resources/FF7-cursor-move.mp3';

// const pageComponents = { Home: HomePage, Scenario: ScenarioPage , Stats: StatsPage };

function PageSelect(props) {
  console.log(props)
  const [play] = useSound('https://alexpatterson.dev/sounds/cat_purr.mp3');

  return (
    <MenuContainer>
      <MenuItems>
        <MenuItem onClick={play}>
          <MenuLink href="#scenario" onClick={() => props.handlePageChange('Scenario')} className={props.currentPage === 'Scenario' ? 'nav-link active' : 'nav-item'}>
            Start New Scenario
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={play}>
          <MenuLink href="#stats" onClick={() => props.handlePageChange('Stats')} className={props.currentPage === 'Stats' ? 'nav-link active' : 'nav-item'}>
          Stats
          </MenuLink>
        </MenuItem>
    </MenuItems>
    </MenuContainer>
  );
}

const MenuContainer = styled.div``

const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3px 30%;
  list-style-type: none;
  text-decoration: none;`

/* if we want to add a hover effect to the menu select
  //   :hover {
    // border-radius: 6px;
    // background-color: yellow;} */
  const MenuItem = styled.li`
  font-size: large;
  margin: 10px;
`

// background-color: rgba(254, 255, 255, 0.836);
const MenuLink = styled.a`
color: white;  
padding: 1px;
border-radius: 6px;
text-decoration: none;`

export default PageSelect;
