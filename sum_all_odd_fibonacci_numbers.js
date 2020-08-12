// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

// Free Code Camp

function sumFibs(num) {
    let fiboSequence = fibonacci(num);
  
    let oddFiboSequence = fiboSequence.filter(
      val => !(val % 2 === 0)
    );
  
    let result = oddFiboSequence.reduce((sum, val) => sum + val)
    console.log(result)
  
    return result;
  }
  
  function fibonacci(num, result = [0, 1]) {
      if( result[result.length - 2] + result[result.length - 1] > num) {
        return result;
      }
  
      result.push(result[result.length - 2] + result[result.length - 1])
  
      return fibonacci(num, result);
  }
  
  sumFibs(1000);
