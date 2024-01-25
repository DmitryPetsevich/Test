import { FC, useCallback } from 'react';
import { DialogName } from '../../../contexts/dialog-context/DialogProvider';
import useDialogContext from '../../../contexts/dialog-context/useDialogContext';
import Button from '../button/Button';

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

  return <Button label={label} onClick={handleClick} />;
};

export default DialogButton;
