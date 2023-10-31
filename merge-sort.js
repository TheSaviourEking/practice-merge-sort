// Merge Sort out-of-place

// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  let mid = Math.floor(arr.length / 2);

  // Recursively sort the left half
  let leftHalfArr = arr.slice(0, mid);
  leftHalfArr = mergeSort(leftHalfArr);

  // console.log(leftHalfArr, 'left')
  // Recursively sort the right half
  let rightHalfArr = arr.slice(mid);
  rightHalfArr = mergeSort(rightHalfArr);
  // console.log(rightHalfArr, 'right')
  // console.log(mergeSort(rightHalfArr), 'right')

  // Merge the halves together and return
  return merge(leftHalfArr, rightHalfArr);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  // const result = new Array(arrA.length + arrB.length);
  const result = [];

  // Point to the first value of each array
  let i = 0, j = 0, k = 0;
  // While there are still values in each array...
  while (i < arrA.length && j < arrB.length) {
    // Compare the first values of each array
    if (arrA[i] < arrB[j]) {
      // Add the smaller value to the return array
      // result[k] = arrA[i];
      result.push(arrA[i])
      i++;
    } else {
      // result[k] = arrB[j];
      result.push(arrB[j]);
      j++;
    }
    // Move the pointer to the next value in that array
    // k++;
  }

  while (i < arrA.length) {
    result.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    result.push(arrB[j]);
    j++;
  }

  // Return the return array
  // console.log(result, 'RESULT');
  return result;
}
const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
// const arr = [2, 7, 3];
console.log(mergeSort(arr));
// mergeSort(arr);

module.exports = [merge, mergeSort];
