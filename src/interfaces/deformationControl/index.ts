import { IBaseObject } from '../common';

export interface IDeformationControl extends IBaseObject {
  data: IDeformationControlData;
  criticalDelta: number;
}

interface IDeformationControlData {
  value: number;
  isValid: boolean;
  delta: number;
}

export interface IDeformationControlChartData {
  startDate: string;
  criticalEndDate: string;
  endData: string;
  points: {
    [key: string]: number;
  };
}
