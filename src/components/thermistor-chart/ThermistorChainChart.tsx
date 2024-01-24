import { FC, useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { useFetchData } from '../../hooks/useFetchData';
import { IThermistorChainChartData } from '../../interfaces/thermistorChain';
import './ThermistorChainChart.style.css';
import useDialogContext from '../../contexts/dialog-context/useDialogContext';
import Button from '../button/Button';

function prepareChartData(obj: { [key: string]: number }): {
  x: Array<string>;
  y: Array<number>;
} {
  const xAxis: Array<string> = [];
  const yAxis: Array<number> = [];

  Object.entries(obj).forEach(([key, value]) => {
    xAxis.push(key);
    yAxis.push(value);
  });

  return {
    x: xAxis,
    y: yAxis,
  };
}

const ThermistorChainChart: FC = () => {
  const [xAxis, setXAxis] = useState<Array<string>>([]);
  const [yAxis, setYAxis] = useState<Array<number>>([]);

  const { data } = useFetchData<IThermistorChainChartData>(
    'deformationTrendResponse'
  );

  const { close } = useDialogContext();

  useEffect(() => {
    const { x, y } = prepareChartData(data.data?.points || []);
    setXAxis(x);
    setYAxis(y);
  }, [data]);

  return data.data ? (
    <div className="chart-container">
      <div className="chart-header">
        <Button onClick={() => close()} label="Закрыть" />
      </div>
      <Plot
        data={[
          {
            x: xAxis,
            y: yAxis,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
        ]}
        layout={{ width: 800, height: 400, title: 'Термокоса' }}
      />
    </div>
  ) : null;
};

export default ThermistorChainChart;
