// Intermediate Algorithm Scripting: Smallest Common Multiple

// Free Code Camp

// Find the smallest common multiple of the provided parameters that
// can be evenly divided by both, as well as by all sequential numbers
// in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be
// in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of
// both 1 and 3 that is also evenly divisible by all numbers between 1
// and 3. The answer here would be 6.

function smallestCommons(arr) {
    let range = createRangeArr (arr);
  
    return findSmallestCommonMultiple(range);
  }
  
  function createRangeArr (arr) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
  
    let result = [];
  
    for(let i = minNum; i <= maxNum; i++) {
      result.push(i);
    }
    return result;
  }
  
  function findSmallestCommonMultiple(arr){
      let maxNum = Math.max(...arr);
    let result = maxNum
    for(let i = 1;; i++) {
      for(let j = 0; j < arr.length; j++){
        if(result % arr[j] != 0) {
          break;
        } else if(result % arr[j] === 0 && j == arr.length -1) {
          return result;
        }
      }
      result += maxNum;
    }
  }
  
  smallestCommons([1,5])
