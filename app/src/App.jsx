import React, { useState } from 'react';
import UserInputForm from './components/UserInputForm';
import ScenarioCharts from './components/ScenarioCharts';

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  return (
    <div>
      <h1 style={{ textAlign: 'center'}}>EVA Model Calculator</h1>
      <UserInputForm setApiResponse={setApiResponse} />
      <br />
      <br />
      {apiResponse && <ScenarioCharts response={apiResponse} />}
    </div>
  );
}

export default App;
