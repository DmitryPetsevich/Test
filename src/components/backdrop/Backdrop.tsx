import { FC, ReactNode } from 'react';
import './Backdrop.style.css';

interface IBackdropProps {
  children?: ReactNode;
}

const Backdrop: FC<IBackdropProps> = ({ children }) => (
  <div className="backdrop">{children}</div>
);

export default Backdrop;
