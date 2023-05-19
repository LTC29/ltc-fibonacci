// with for loop

function fibonacciGenerator(n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    //if i = 0 or 1, it will push i to array as is
    if (i < 2) {
      sequence.push(i);
      // if i is greater than 1, it will push the sum of the previous two numbers to the array
    } else {
      sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
  }
  return sequence;
}

//with recursion

function fibonacciGeneratorRecursion(n) {
  let sequence = [];
  if (n === 1) {
    sequence.push(0);
  } else if (n === 2) {
    sequence.push(0, 1);
  } else {
    sequence = fibonacciGeneratorRecursion(n - 1);
    sequence.push(
      //sum of the last two numbers in the array
      sequence[sequence.length - 2] + sequence[sequence.length - 1]
    );
  }
  return sequence;
}
