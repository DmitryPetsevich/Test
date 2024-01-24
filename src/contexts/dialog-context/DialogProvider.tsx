import { FC, ReactNode, useCallback, useState } from 'react';
import DialogContext from './DialogContext';
import Backdrop from '../../components/backdrop/Backdrop';
import ThermistorChainChart from '../../components/thermistor-chart/ThermistorChainChart';
import DeformationControlChart from '../../components/deformation-control-chart/DeformationControlChart';

interface IDialogProviderProps {
  children?: ReactNode;
}

const charts = {
  thermistorChain: (props: any) => <ThermistorChainChart {...props} />,
  deformationControl: (props: any) => <DeformationControlChart {...props} />,
};

export type DialogName = keyof typeof charts;

const DialogProvider: FC<IDialogProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState<React.JSX.Element>();

  const open = useCallback(
    (name: DialogName, props?: any) => {
      setIsOpen(true);
      setComponent(charts[name](props));
    },
    [setIsOpen, setComponent]
  );

  const close = useCallback(() => {
    setIsOpen(false);
    setComponent(undefined);
  }, [setIsOpen]);

  return (
    <DialogContext.Provider value={{ isOpen, open, close }}>
      <>{children}</>
      {isOpen ? <Backdrop>{component}</Backdrop> : null}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
