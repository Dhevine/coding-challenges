
// -- All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers) {
  // ...
  return `${Math.max(...numbers.split(" "))} ${Math.min(
    ...numbers.split(" ")
  )}`;
}

// old one
// function highAndLow(numbers) {
//   // ...
//   const arr = numbers.split(" ").map((num) => +num);
//   const max = arr.reduce((a, b) => {
//     if (a > b) return a;
//     else return b;
//   }, arr[0]);
//   const min = arr.reduce((a, b) => {
//     if (a < b) return a;
//     else return b;
//   }, arr[0]);
//   return `${max} ${min}`;
// }