interface INavigationLink {
  to: string;
  label: string;
  className?: string;
}

export const navigationConfig: INavigationLink[] = [
  {
    to: '/',
    label: 'Home',
    className: 'link',
  },
  {
    to: 'measurements/1',
    label: 'ThermistorChain',
    className: 'link',
  },
  {
    to: 'measurements/trend/2',
    label: 'DeformationControl',
    className: 'link',
  },
];
