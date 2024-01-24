import { FC, useCallback } from 'react';
import { DialogName } from '../../contexts/dialog-context/DialogProvider';
import useDialogContext from '../../contexts/dialog-context/useDialogContext';
import './DialogButton.style.css';

interface IDialogButtonProps {
  dialogName: DialogName;
  dialogProps?: any;
  label?: string;
}

const DialogButton: FC<IDialogButtonProps> = ({
  dialogName,
  dialogProps = {},
  label = 'Button',
}) => {
  const { open } = useDialogContext();

  const handleClick = useCallback(() => {
    open(dialogName, dialogProps);
  }, [open, dialogName, dialogProps]);

  return (
    <button onClick={handleClick} className="dialog-button">
      {label}
    </button>
  );
};

export default DialogButton;
