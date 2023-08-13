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
  const scenerios = ['scenerioA', 'scenerioB', 'scenerioC'];
  const scenerioProperties = Object.keys(response.scenerioA.chartData)

  const scenerioData = scenerioProperties.map(property => {
    const data = { name: property };
    scenerios.forEach(scenerio => {
      data[scenerio] = response[scenerio]?.chartData?.[property] || 0;
    });
    return data;
  });

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Output Charts</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ResponsiveContainer width="80%" aspect={3}>
          <BarChart width={500} height={300} data={scenerioData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {scenerios.map((scenerio, index) => (
              <Bar
                key={scenerio}
                dataKey={scenerio}
                fill={getColor(index)}
                name={scenerio}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

// Helper function to generate a random color
const getColor = (index) => {
  const colors = ['#EA1179', '#1A5D1A', '#FFB84C'];
  return colors[index % colors.length];
};

export default ScenarioCharts;
