import { createContext } from 'react';
import { DialogName } from './DialogProvider';

interface IDialogContextValue {
  isOpen: boolean;
  open: (name: DialogName) => void;
  close: () => void;
}

const DialogContext = createContext<IDialogContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export default DialogContext;
