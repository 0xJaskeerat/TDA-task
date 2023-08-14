import React, { useState } from 'react';
import UserInputForm from './components/UserInputForm';
import ScenarioCharts from './components/ScenarioCharts';
import Navbar from './components/Navbar';

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  return (
    <div>
      <Navbar />
      <UserInputForm setApiResponse={setApiResponse} />
      <br />
      <br />
      {apiResponse && <ScenarioCharts response={apiResponse} />}
    </div>
  );
}

export default App;
