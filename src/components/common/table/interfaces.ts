import React from 'react';

export interface IHeader {
  key: string;
  label: string;
  renderHead?: React.JSX.Element;
  renderCell?: (args: any) => React.JSX.Element;
  thProps?: {
    [key: string]: string | Object;
  };
  tdProps?: {
    [key: string]: string | Object;
  };
  children?: IHeader[];
}
