import { FC, useMemo } from 'react';
import './Delimiter.style.css';

interface IDelimiterProps {
  vertical?: boolean;
}

const Delimiter: FC<IDelimiterProps> = ({ vertical = false }) => {
  const className = useMemo(
    () => ['delimiter', vertical ? 'vertical' : 'horizontal'].join(' '),
    [vertical]
  );

  return <div className={className} />;
};

export default Delimiter;
