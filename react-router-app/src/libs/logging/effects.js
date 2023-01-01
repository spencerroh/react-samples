/**
 * Description
 * atom 변경 시 콘솔에 값 변경을 출력하는 effect 함수를 반환합니다.
 * @param {string} name 콘솔에 출력할 이름
 * @param {boolean} showTrace 로그 발생 시 callstack을 출력할 지 여부. 기본값 false.
 * @returns {import("recoil").AtomEffect} Atom의 effects에 추가할 effect 함수
 * @example
 * const state = atom({
 *   key: "state", 
 *   default: null,
 *   effects: [
 *     makeLoggingEffect("state");
 *   ]
 * });
 * 
 * // [STATE CHANGED] state
 * //   Old: null
 * //   New: Hello
 */
export const makeLoggingEffect = (name, showTrace = false) => ({onSet}) => {
  onSet((newValue, oldValue) => {
    console.group(`[STATE CHANGED] %c${name}`, "color:red");
    console.log("Old =>", oldValue);
    console.log("New =>", newValue);
    if (showTrace)
      console.trace(name);
    console.groupEnd();
  })
}