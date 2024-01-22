import React from 'react';

export interface IHeader {
  key: string;
  label: string;
  renderHead?: React.JSX.Element;
  renderCell?: (args: any) => React.JSX.Element;
  props?: {
    [key: string]: string;
  };
  children?: IHeader[];
}
