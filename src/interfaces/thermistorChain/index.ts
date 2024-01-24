import { IBaseObject } from '../common';

export interface IThermistorChain extends IBaseObject {
  data: IThermistorChainData;
  criticalAverage: number;
  averageTemperature: number;
}

interface IThermistorChainData {
  [key: number]: IThermistorChainDataValue;
}

interface IThermistorChainDataValue {
  value: number;
  isValid: boolean;
}

export interface IThermistorChainChartData {
  startDate: string;
  criticalEndDate: string;
  points: {
    [key: string]: number;
  };
}
