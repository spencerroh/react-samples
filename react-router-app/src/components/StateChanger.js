import React, { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { $state } from '../states';

const StateChanger = props => {
  const setProductState = useSetRecoilState($state.PRODUCT_STATE);
  const countRef = useRef(0);

  const changeErrorState = () => {
      countRef.current = countRef.current + 1;

      setProductState({
          error: "hello" + countRef.current
      });
  }

  const changeLightState = () => {
    setProductState(old => ({
      ...old, 
      light: !old.light
    }));
  }

  const addUpBeepFeature = () => {
    setProductState(old => ({
      upBeep: old.upBeep == null ? "비발디 사계중 봄" : null
    }));
  }

  const changeUpBeepMenu = (e) => {
    setProductState({
      upBeep: e.target.value
    });
  }

  return (
    <div>
      <button onClick={changeErrorState}>오류 변경</button>
      <button onClick={changeLightState}>조명 변경</button>
      <button onClick={addUpBeepFeature}>비프 추가/제거</button>
      <select onChange={changeUpBeepMenu}>
        <option value={"백조의 호수"}>백조의 호수</option>
        <option value={"숭어"}>숭어</option>
      </select>
    </div>
  );
};

export default StateChanger;