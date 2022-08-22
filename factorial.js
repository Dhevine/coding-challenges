// Get the factorial of numbers

// via recursion
function recursionChallenge(num) {
  if (num === 0 || num === 1) return 1;
  return num * recursionChallenge(num - 1);
}

recursionChallenge(5) // 120
recursionChallenge(0) // 1


// via loops
function factorial(n) {
  if (n === 0) return 1;
  let num = n;
  while (n > 1) {
    n--;
    num *= n;
  }
  return num;
}

factorial(5) // 120
factorial(0) // 1