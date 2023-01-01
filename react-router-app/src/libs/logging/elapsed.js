/**
 * Description
 * 두번째 인자로 주어진 함수의 호출 시간을 측정합니다.
 * @example
 * elapseWhile("time check", () => {
 *   really_big_function();
 * });
 * 
 * //time check: 0.1234 ms
 * @param {string} name 콘솔에 출력할 이름
 * @param {() => void} func 호출 시간을 측정할 함수
 */
export const elapseWhile = (name, func) => {
  console.time(name);
  func();
  console.timeEnd(name);
}

/**
 * Description
 * 이 함수가 호출된 시점부터 함수가 리턴한 함수를 호출할 때 까지 시간을 콘솔에 출력합니다.
 * @example
 * const end = elapseFrom("time check");
 * really_big_function();
 * end();
 * 
 * // time check: 0.1234 ms
 * @param {string} name 콘솔에 출력할 이름
 * @returns {() => void} 시간 측정 종료 함수
 */
export const elapseFrom = (name) => {
  console.time(name);

  return () => {
    console.timeEnd(name);
  };
}