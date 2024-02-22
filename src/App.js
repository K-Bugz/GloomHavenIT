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
  <BlackBacground>
    <AppContainer>
      {/* <PageSelect currentPage={currentPage} handlePageChange={handlePageChange}/> */}
      <PageComponent/>
    </AppContainer>
  </BlackBacground>
  );
}


const BlackBacground = styled.div`
background-color: black;
`

const AppContainer = styled.div`
border: 5px solid white;
border-radius: 15px;
height: 100vh;
width: 100%;
background: radial-gradient(-180px 0px,circle ,#0053ad 300px,#001b85 500px,#000223);
background: -moz-radial-gradient(-180px 0px,circle ,#0053ad 300px,#001b85 500px,#000223);
background: -webkit-radial-gradient(-180px 0px,circle ,#0053ad 300px,#001b85 500px,#000223);
background: -o-radial-gradient(-180px 0px,circle ,#0053ad 300px,#001b85 500px,#000223);
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
padding: 7px;
`

export default App;