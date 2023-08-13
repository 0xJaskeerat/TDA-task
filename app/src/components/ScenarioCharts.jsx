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
  const scenarioData = [
    {
      name: 'Economic Value Added',
      scenarioA: response.scenerioA.chartData.economicValueAdded,
      scenarioB: response.scenerioB.chartData.economicValueAdded,
      scenarioC: response.scenerioC.chartData.economicValueAdded,
    },
    {
      name: 'Profit',
      scenarioA: response.scenerioA.chartData.profit,
      scenarioB: response.scenerioB.chartData.profit,
      scenarioC: response.scenerioC.chartData.profit,
    },
    {
      name: 'Cost of Capital',
      scenarioA: response.scenerioA.chartData.costOfCapital,
      scenarioB: response.scenerioB.chartData.costOfCapital,
      scenarioC: response.scenerioC.chartData.costOfCapital,
    },
    {
      name: 'EBITDA',
      scenarioA: response.scenerioA.chartData.EBITDA,
      scenarioB: response.scenerioB.chartData.EBITDA,
      scenarioC: response.scenerioC.chartData.EBITDA,
    },
    {
      name: 'Taxes, Interest, Depreciation, Amortization',
      scenarioA: response.scenerioA.chartData.taxesInterestsDepreciationAmortization,
      scenarioB: response.scenerioB.chartData.taxesInterestsDepreciationAmortization,
      scenarioC: response.scenerioC.chartData.taxesInterestsDepreciationAmortization,
    },
    {
      name: 'WACC',
      scenarioA: response.scenerioA.chartData.WACC,
      scenarioB: response.scenerioB.chartData.WACC,
      scenarioC: response.scenerioC.chartData.WACC,
    },
    {
      name: 'Total Capital Invested',
      scenarioA: response.scenerioA.chartData.totalCapitalInvested,
      scenarioB: response.scenerioB.chartData.totalCapitalInvested,
      scenarioC: response.scenerioC.chartData.totalCapitalInvested,
    },
    {
      name: 'Revenue',
      scenarioA: response.scenerioA.chartData.revenue,
      scenarioB: response.scenerioB.chartData.revenue,
      scenarioC: response.scenerioC.chartData.revenue,
    },
    {
      name: 'Fixed Capital',
      scenarioA: response.scenerioA.chartData.fixedCapital,
      scenarioB: response.scenerioB.chartData.fixedCapital,
      scenarioC: response.scenerioC.chartData.fixedCapital,
    },
    {
      name: 'Working Capital',
      scenarioA: response.scenerioA.chartData.workingCapital,
      scenarioB: response.scenerioB.chartData.workingCapital,
      scenarioC: response.scenerioC.chartData.workingCapital,
    }
  ];

  return (
    <div>
      <h2>Output Charts</h2>
      <ResponsiveContainer width="80%" aspect={3}>
        <BarChart width={1000} height={400} data={scenarioData}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="scenarioA" fill="#F11A7B" name="Scenario A" />
          <Bar dataKey="scenarioB" fill="#1A5D1A" name="Scenario B" />
          <Bar dataKey="scenarioC" fill="#FFB84C" name="Scenario C" />
        </BarChart>

      </ResponsiveContainer>
    </div>
  );
};

export default ScenarioCharts;
