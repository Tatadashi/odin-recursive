function fibs(num) {
  const arr = [];
  let prevSecondNum = 0;
  let prevNum = 1;
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      const currentNum = prevNum + prevSecondNum;
      prevSecondNum = prevNum;
      prevNum = currentNum;
      arr.push(currentNum);
    }
  }

  return arr;
}

//finds greatest number in fib sequence (ex. fib(3) == 1 and fib(5) == 3 amd fib(7) == 8)
function fib(num) {
  let finalNum;
  let prevSecondNum = 0;
  let prevNum = 1;
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      finalNum = i;
    } else {
      const currentNum = prevNum + prevSecondNum;
      prevSecondNum = prevNum;
      prevNum = currentNum;
      finalNum = currentNum;
    }
  }

  return finalNum;
}

function fibsRec(num) {
  if (num < 2) {
    return [0];
  } else if (num < 3) {
    return [0, 1];
  } else {
    let arr = fibsRec(num - 1);
    arr.push(fib(num - 1) + fib(num - 2));
    return arr;
  }
}
console.log(fibsRec(8));
