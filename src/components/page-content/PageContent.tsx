import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import './PageContent.style.css';

const PageContent: FC = () => (
  <div className="page-content">
    <Outlet />
  </div>
);

export default PageContent;
