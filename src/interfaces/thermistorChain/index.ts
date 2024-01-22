import { ISensor } from '../common';

export interface IThermistorChain extends ISensor {
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
