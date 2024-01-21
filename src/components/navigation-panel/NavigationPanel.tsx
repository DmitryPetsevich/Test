import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationPanel.style.css';
import { navigationConfig } from '../../configs/navigation';

const NavigationPanel: FC = () => {
  return (
    <nav className="navigation-panel">
      {navigationConfig.map(({ to, className, label }) => (
        <NavLink
          to={to}
          className={({ isActive }) =>
            [className, isActive ? 'active' : ''].join(' ')
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationPanel;
