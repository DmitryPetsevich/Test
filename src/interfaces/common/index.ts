export interface IResponse<T> {
  data: T[];
  currentPage: number;
  errors: any[];
  hasNext: boolean;
  hasPrevious: boolean;
  pageSize: number;
  succeeded: boolean;
  totalPages: number;
  totalRecords: number;
}

export interface ISensor {
  time: string;
  sensorType: string;
  status: string;
}
