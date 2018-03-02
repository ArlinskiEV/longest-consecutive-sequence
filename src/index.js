module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length <= 1) return array.length;
  let temp = {};
  let result = 0;
  
  for (let i = 0; i < array.length; i++) {
    temp[array[i]] = {length: {current: 1, id: i}};
    // check left
    if (temp[array[i] - 1]) {
      temp[array[i]] = temp[array[i] - 1];
      temp[array[i]].length.current += 1;
      // console.log(`left, i=${i}, current = ${temp[array[i]].length.current}`);
    }

    // check right
    if (temp[array[i] + 1]) {
      temp[array[i] + 1].length.current += temp[array[i]].length.current;

      temp[array[i]].length = temp[array[i] + 1].length;
      temp[array[i]] = temp[array[i] + 1];
      // console.log(`right, i=${i}, current = ${temp[array[i]].length.current}`);
    }

    if (result < temp[array[i]].length.current) result = temp[array[i]].length.current;
  }


  debugger;
  return result;
}
