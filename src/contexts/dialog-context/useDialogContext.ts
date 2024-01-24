import { useContext } from 'react';
import DialogContext from './DialogContext';

export default function useDialogContext() {
  return useContext(DialogContext);
}
