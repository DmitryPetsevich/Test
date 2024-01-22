import { ISensor } from '../common';

export interface IDeformationControl extends ISensor {
  data: IDeformationControlData;
  criticalDelta: number;
}

interface IDeformationControlData {
  [key: number]: IDeformationControlDataValue;
}

interface IDeformationControlDataValue {
  value: number;
  isValid: boolean;
  delta: number;
}
