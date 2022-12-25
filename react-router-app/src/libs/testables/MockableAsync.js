/** 결과/에러에 대한 Mocking을 지원하는 클래스입니다. 
 * 
 * @example
 * const asyncFunc = () => {
 *   return new Promise((resolve) => {
 *     resolve('hello world');
 *   });
 * };
 * 
 * const mockable = new MockableAsync(asyncFunc);
 * mockable.request().then((result) => { console.log(result); }); // hello world
 * 
 * mockable.fakeResult('good bye world');
 * mockable.request().then((result) => { console.log(result); }); // good bye world
 * 
 * mockable.fakeError('crash world');
 * mockable.request().catch((error) => { console.log(error); }); // crash world
*/
export class MockableAsync {
  #fakeResult = null;
  #fakeError = null;
  #asyncFunc = null;

/**
 * 결과/에러를 모사할 수 있는 기능을 제공하는 객체를 반환합니다.
 * @param {any} asyncFunc Mocking을 제공할 비동기 함수
 */
  constructor(asyncFunc) {
    if (asyncFunc == null)
      throw new Error('asyncFunc should be assigned.');

    this.#asyncFunc = asyncFunc;
  }

/**
 * 생성 시 주어진 Async 기능을 호출합니다.
 * 
 * @param {any} option Async 동작을 위한 설정
 * @returns {any} Async 동작에 대한 결과
 */
  async request(option = null) {
    if (this.#fakeResult != null) {
      const promise = new Promise((resolve) => {
        resolve(this.#fakeResult);
      });

      this.#fakeResult = null;
      return promise;
    }

    if (this.#fakeError != null) {
      const promise = new Promise((resolve, reject) => {
        reject(this.#fakeError);
      });

      this.#fakeResult = null;
      return promise;
    }

    return await this.#asyncFunc(option);
  }


/**
 * Description
 * @param {any} result Mocking할 결과값
 */
  fakeResult(result = null) {
    this.#fakeResult = result;
  }

/**
 * Description
 * @param {any} error Mocking할 에러값
 */
  fakeError(error = null) {
    this.#fakeError = error;
  }
};
