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
    label: 'Главная',
    className: 'link',
  },
  {
    key: 'thermistorChain',
    to: 'measurements/1',
    label: 'Термокоса',
    className: 'link',
  },
  {
    key: 'deformationControl',
    to: 'measurements/trend/2',
    label: 'Деформационная марка',
    className: 'link',
  },
];
