'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  const adder = (a) => {
    if (a === undefined) {
      const finalResult = result;

      result = 0;

      return finalResult;
    }

    result += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
