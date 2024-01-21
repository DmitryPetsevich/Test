interface INavigationLink {
  key: string;
  to: string;
  label: string;
  className?: string;
}

export const navigationConfig: INavigationLink[] = [
  {
    key: 'home',
    to: '/',
    label: 'Home',
    className: 'link',
  },
  {
    key: 'thermistorChain',
    to: 'measurements/1',
    label: 'ThermistorChain',
    className: 'link',
  },
  {
    key: 'deformationControl',
    to: 'measurements/trend/2',
    label: 'DeformationControl',
    className: 'link',
  },
];
