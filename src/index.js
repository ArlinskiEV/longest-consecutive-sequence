module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length <= 1) return array.length;
  let temp = {};
  let result = 0;
  
  for (let i = 0; i < array.length; i++) {
                                                      //check current
                                                      // if (!temp[array[i]]) {
    temp[array[i]] = {length: {current: 1, id: i}};
                                                      // } else {
                                                      //   temp[array[i]].length.current += 1;
                                                      // }
    function check(a, b) {
      if (!b) return 0;
      b.length.current += a.length.current;
      a.length = b.length;
    };

    check(temp[array[i]], temp[array[i] - 1]);
    check(temp[array[i]], temp[array[i] + 1]);

    if (result < temp[array[i]].length.current) result = temp[array[i]].length.current;
  }

  debugger;
  return result;
}
