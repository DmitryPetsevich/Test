import { FC } from 'react';
import './Button.style.css';

interface IDialogButtonProps {
  label?: string;
  onClick?: () => void;
}

const Button: FC<IDialogButtonProps> = ({
  label = 'Button',
  onClick = () => {},
}) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
};

export default Button;
