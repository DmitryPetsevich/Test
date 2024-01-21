import { FC } from 'react';
import Backdrop from '../backdrop/Backdrop';
import Spinner from '../spinner/Spinner';

interface ILoaderProps {
  loading?: boolean;
}

const Loader: FC<ILoaderProps> = ({ loading = true }) =>
  loading ? (
    <Backdrop>
      <Spinner />
    </Backdrop>
  ) : null;

export default Loader;
