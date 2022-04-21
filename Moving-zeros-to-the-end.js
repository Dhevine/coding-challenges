// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


const moveZeros = function (arr) {
   const real_Arr = []
  const zero_Arr = []

  arr.forEach((num) => (num !== 0 ? real_Arr.push(num) : zero_Arr.push(num)))
  return real_Arr.concat(zero_Arr)
}