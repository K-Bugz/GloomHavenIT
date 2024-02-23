import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function ScenarioPage() {
    const [scenarioName, setScenarioName] = useState(''); // sets scenario name
    const [numPlayers, setNumPlayers] = useState(''); // Ask how many players
    const [displayForm, setDisplayForm] = useState(false); // Initial questions prior. 
    const handleInputChange = (event) => { setScenarioName(event.target.value) }; 
    const handleSubmit = (event) => { 
        event.preventDefault(); // prevent page refresh
        };
    const handleSelectChange = (event) => {
        setNumPlayers(event.target.value);
        setDisplayForm(true);
        };

    return (
    <div>
      {!displayForm ? (
        <form onSubmit={handleSubmit}>
          <ScenarioLabel>Scenario Name:
            <input type="text" value={scenarioName} onChange={handleInputChange} />
          </ScenarioLabel>

          <label>
            Select number of players:
            <select value={numPlayers} onChange={handleSelectChange}>
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h1>{scenarioName}</h1>
        </div>
      )}
    </div>
    );
}

const moo = styled.div``

const ScenarioLabel = styled.label`
color: white;
font-size:24px;
`

const moo3 = styled.div``