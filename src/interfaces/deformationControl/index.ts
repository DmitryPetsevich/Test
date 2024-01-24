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
