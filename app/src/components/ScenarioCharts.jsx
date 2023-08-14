import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ScenarioCharts = ({ response }) => {
  // Define an array of scenarios
  const scenarios = ['scenerioA', 'scenerioB', 'scenerioC'];

  // Getting the for the first scenarios in the response
  const scenarioProperties = Object.keys(response.scenerioA.chartData);

  // Create an array of data objects for each property and scenario combination
  const scenarioData = scenarioProperties.map(property => {
    const data = { name: property };

    // Populate data for each scenario
    scenarios.forEach(scenario => {
      data[scenario] = response[scenario]?.chartData?.[property] || 0;
    });

    return data;
  });

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Output Charts</h2>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <ResponsiveContainer width="80%" aspect={3}>
          {/* Create a bar chart with provided width, height, and data */}
          <BarChart width={500} height={300} data={scenarioData}>
            {/* Add a grid with dashed stroke */}
            <CartesianGrid strokeDasharray="3 3" />

            {/* Set X-axis to display property names */}
            <XAxis dataKey="name" />

            {/* Set Y-axis */}
            <YAxis />

            {/* Display tooltips on hover */}
            <Tooltip />

            {/* Display legend */}
            <Legend />

            {/* Create Bar components for each scenario */}
            {scenarios.map((scenario, index) => (
              <Bar
                key={scenario}
                dataKey={scenario}
                fill={getColor(index)} // Apply a color to each bar based on index
                name={scenario}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

// Helper function to generate a color based on index
const getColor = (index) => {
  const colors = ['#EA1179', '#1A5D1A', '#FFB84C'];
  return colors[index % colors.length]; // Cycle through colors based on index
};

export default ScenarioCharts;
