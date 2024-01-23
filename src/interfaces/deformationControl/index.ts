import { ISensor } from '../common';

export interface IDeformationControl extends ISensor {
  data: IDeformationControlData;
  criticalDelta: number;
}

interface IDeformationControlData {
  value: number;
  isValid: boolean;
  delta: number;
}
