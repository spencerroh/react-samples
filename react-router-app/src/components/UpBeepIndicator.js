import React from 'react';
import { useRecoilValue } from 'recoil';
import { $state } from '../states';

const UpBeepIndicator = () => {
  const upBeep = useRecoilValue($state.PRODUCT.UPBEEP);

  if (upBeep == null)
    return <></>;

  return (
    <div>
      Up가전 - Beep음: {upBeep}
    </div>
  );
};

export default UpBeepIndicator;