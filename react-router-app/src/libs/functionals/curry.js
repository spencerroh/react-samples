
/**
 * 주어진 함수를 currying 합니다. 왼쪽부터 오른쪽 파라미터 순으로 currying 합니다.
 * @example
 * const s = curryReverse((a, b) =>{ return a - b; })(5);
 * s(10); // a: 5, b: 10, result: -5
 * 
 * @param {any} Currying 할 함수
 * @returns {any} Currying 된 함수
 */
export function curry(func) {
  return function (a, b) {
      if (arguments.length === 2) return func(a, b);
      else return (b) => func(a, b);
  }
}

/**
 * 주어진 함수를 currying 합니다. 오른쪽부터 왼쪽 파라미터 순으로 currying 합니다.
 * 
 * @example
 * const s = curryReverse((a, b) =>{ return a - b; })(5);
 * s(10); // a: 10, b: 5, result: 5
 * 
 * @param {any} Currying 할 함수
 * @returns {any} Currying 된 함수
 */
export function curryReverse(func) {
  return function (a, b) {
      if (arguments.length === 2) return func(a, b);
      else return (b) => func(b, a);
  }
}