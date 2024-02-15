import React from 'react';
import styled from 'styled-components';

// const pageComponents = { Home: HomePage, Scenario: ScenarioPage , Stats: StatsPage };

function PageSelect(props) {
  return (
    <MenuContainer>
      <MenuItems>
        <MenuItem>
          <MenuLink href="#scenario" onClick={() => props.handlePageChange('Scenario')} className={props.currentPage === 'Scenario' ? 'nav-link active' : 'nav-item'}>
            Start New Scenario
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#stats" onClick={() => props.handlePageChange('Stats')} className={props.currentPage === 'Stats' ? 'nav-link active' : 'nav-item'}>
          Stats
          </MenuLink>
        </MenuItem>
    </MenuItems>
    </MenuContainer>
  );
}

const MenuContainer = styled.div``

const MenuItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 3px 30%;
  list-style-type: none;
  text-decoration: none;`

  const MenuItem = styled.li`
  font-size: large;
  :hover {
    border-radius: 6px;
    background-color: yellow;}`

// background-color: rgba(254, 255, 255, 0.836);
const MenuLink = styled.a`
  padding: 1px;
  border-radius: 6px;`

export default PageSelect;
