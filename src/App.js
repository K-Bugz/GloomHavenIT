import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageSelect from './components/PageSelect';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import ScenarioPage from './pages/ScenarioPage';

const pageComponents = { Home: HomePage, Scenario: ScenarioPage , Stats: StatsPage };

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const PageComponent = pageComponents[currentPage] || HomePage;
  useEffect(() => { document.title = `${currentPage} | My Website`}, [currentPage]);

return (
    <AppContainer>
      {/* <PageSelect currentPage={currentPage} handlePageChange={handlePageChange}/> */}
      <PageComponent/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
background-color: #1b1b1b;
`

export default App;