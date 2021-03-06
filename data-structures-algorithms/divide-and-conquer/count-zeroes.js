/** Given an array of 1s and 0s which has all 1s first
 *  followed by all 0s, write a function that returns
 *  the number of zeros in the array.
 *
 *  Constraints: Time Complexity: O(log N)
 *
 * countZeroes([1,1,1,1,0,0]) // 2
 * countZeroes([1,0,0,0,0]) // 4
 * countZeroes([0,0,0]) // 3
 * countZeroes([1,1,1,1]) // 0
 *
 */

function countZeroes(arr) {
  let firstZeroIdx = findFirstZeroIdx(arr);
  if (firstZeroIdx === -1) return 0;

  return arr.length - firstZeroIdx;
}

function findFirstZeroIdx(arr) {
  //low and high are idxs of the array
  let low = 0;
  let high = arr.length - 1;

  //loop will move left and right Idx towards eachother until leftIdx > rightIdx
  while (low <= high) {
    //divide
    let midIdx = Math.floor((low + high) / 2);
    //if array starts with a zero or the number before the zero is a 1
    if (arr[midIdx] === 0 && (midIdx === 0 || arr[midIdx - 1] === 1)) {
      return midIdx;
      // if arr[midIdx] is pointing at a 1, move leftIdx to the right
    } else if (arr[midIdx] === 1) {
      low = midIdx + 1;
      // else arr[midIdx] === 0, so move rightIdx to the left
    } else {
      high = midIdx - 1;
    }
  }

  //return -1 if the array contains no zeros
  return -1;
}

//   LR
//[1, 0, 0, 0 ,0];

module.exports = countZeroes;
