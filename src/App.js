import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage'; 
import ScenarioPage from './pages/ScenarioPage'; 

const App = () => {
return (
  <>
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/scenario" element={<ScenarioPage/>} />
        <Route path="/stats" element={<StatsPage/>} />
      </Routes>
    </AppContainer>
  </>
  );
}

const AppContainer = styled.div`
border: 5px solid white;
height: 100vh;
width: 100%;
background: radial-gradient(-180px 0px,circle ,#0053ad 300px,#001b85 500px,#000223);
background: -moz-radial-gradient(-180px 0px,circle ,#0053ad 300px,#001b85 500px,#000223);
background: -webkit-radial-gradient(-180px 0px,circle ,#0053ad 300px,#001b85 500px,#000223);
background: -o-radial-gradient(-180px 0px,circle ,#0053ad 300px,#001b85 500px,#000223);
-webkit-border-radius: 15px;
padding-top: 11px;
`

export default App;