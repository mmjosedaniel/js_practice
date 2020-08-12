// Intermediate Algorithm Scripting: Steamroller

// Free Code Camp

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    let i = 0;
    while(i  < arr.length) {
      if(Array.isArray(arr[i])) {
        arr.splice(i , 1,...arr[i])
      } else {
        i++
      }
    }
    console.log(...arr)
    return arr;
  }
  
  
  
  steamrollArray([1, [2], [3, [[4]]]]);
