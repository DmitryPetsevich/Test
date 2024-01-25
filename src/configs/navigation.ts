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
    to: 'thermistor-chain',
    label: 'Термокоса',
    className: 'link',
  },
  {
    key: 'deformationControl',
    to: 'deformation-control',
    label: 'Деформационная марка',
    className: 'link',
  },
];
