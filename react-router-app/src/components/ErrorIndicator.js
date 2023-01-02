import React from 'react';
import { useRecoilValue } from 'recoil';
import { $state } from '../states';

const ErrorIndicator = () => {
  const error = useRecoilValue($state.PRODUCT.ERROR);
  return (
    <div>
      오류: {error}
    </div>
  );
};

export default ErrorIndicator;