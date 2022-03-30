function findFirstDuplicate(arr) {
  let array = [];
  for (num of arr) {
    if (array.includes(num)) return num;
    else array.push(num);
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 3');
  console.log('=>', findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log('');

  console.log('Expecting: -1');
  console.log('=>', findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file

// let array = []
// for num in arr:
// if array.includes num, return num

// else return -1

// And a written explanation of your solution
