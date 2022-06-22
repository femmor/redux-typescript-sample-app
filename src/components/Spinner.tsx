import { FC } from 'react';
import Loading from 'react-loading';

const Spinner: FC = () => {
  return (
    <div className="spinner">
      <Loading type="spin" color="gray" width={100} height={100} />
    </div>
  );
};

export default Spinner;
