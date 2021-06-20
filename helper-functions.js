function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!
  let firstZero = findFirstValue(arr, 0);
  if (firstZero === -1) return 0;

  return arr.length - firstZero
}

function findFirstValue(arr, val, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = low + Math.floor((high - low) / 2);
      if ((mid === 0 || arr[mid - 1] < val) && arr[mid] === val) {
        return mid;
      } else if (arr[mid] === 1) {
        return findFirstValue(arr, val, mid + 1, high);
      }
      return findFirstValue(arr, val, low, mid - 1);
    }
    return -1;
  }

function findLastValue(arr, val, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2);
      if ((mid === arr.length - 1 || val < arr[mid + 1]) && arr[mid] === val) {
        return mid;
      } else if (val < arr[mid]) {
        return findLastValue(arr, val, low, mid - 1)
      } else {
        return findLastValue(arr, val, mid + 1, high)
      }
    }
    return -1
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1
    else if (arr[start] <= arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}

function findRotatedIndex(arr, val){
  let pivot = findPivot(arr);
  if (pivot > 0 && val >= arr[0] && val <= arr[pivot - 1]) {
    return binarySearch(arr, val, 0, pivot - 1);
  } else {
    return binarySearch(arr, val, pivot, arr.length - 1);
  }
}

function binarySearch(arr, val, start, end){
  if(arr.length === 0) return -1;
  if (val < arr[start] || val > arr[end]) return -1;

  while(start <= end){
      let middleIdx = Math.floor((start + end)/2);
      let middleVal = arr[middleIdx];
      if(val < middleVal){
          end = middleIdx - 1;
      }else if (val > middleVal){
          start = middleIdx + 1;
      }else {
          return middleIdx;
      }
  }
  return -1;
}

function binarySearchFloor(arr, val, start = 0, end = arr.length-1){
  if(arr.length === 0) return -1;

  while(start <= end){
      let middleIdx = Math.floor((start + end)/2);
      if(val < arr[middleIdx]){
        end = middleIdx - 1;
      }else if (val > arr[middleIdx]){
        if(val <= arr[middleIdx+1] || start === end) return arr[middleIdx];
        start = middleIdx + 1;
      }else {
          return arr[middleIdx];
      }
  }
  return -1;
}


// //Because the array is rotated, the lowest value in the array is 1+ the middleIndex, so interms of comparing size we are going to compare the value instead.
// function findIndexOfRotated(arr, val, lowValue = (Math.floor((arr.length-1)/2)+1), highValue = (Math.floor((arr.length-1)/2))){
//   if (lowValue >= highValue){
//     //In this case, the lowValue is the the higher middleIndex
//     let midValue = Math.floor(lowValue-highValue)-1;
//     if(val < arr[midValue]){
//       return findIndexOfRotated(arr, val, lowValue, )
//     }else if(val > arr[midValue]){

//     }
//   }
// }


  module.exports = {countZeroes, findFirstValue, findLastValue, findRotatedIndex, findPivot, binarySearchFloor}