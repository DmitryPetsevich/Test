export interface IResponse<T> {
  data: T;
  errors: any[];
  succeeded: boolean;
}

export interface IBaseObject {
  time: string;
  sensorType: string;
  status: string;
}
