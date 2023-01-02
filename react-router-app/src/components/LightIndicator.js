import React from 'react';
import { useRecoilValue } from 'recoil';
import { $state } from '../states';

const LightIndicator = () => {
  const light = useRecoilValue($state.PRODUCT.LIGHT);

  const translation = {
    true: "켜짐",
    false: "꺼짐"
  };

  return (
    <div>
      조명: {translation[light]}
    </div>
  );
};

export default LightIndicator;