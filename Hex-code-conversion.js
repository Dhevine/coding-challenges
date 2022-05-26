// CODE WARS 

// hex code conversion
function rgb(r, g, b) {
  const arr = [r, g, b]
  const hexArr = ["A", "B", "C", "D", "E", "F"]
  let newArr = ""

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 255) arr[i] = 255
    if (arr[i] < 0) arr[i] = 0
    newArr += `${Math.trunc(arr[i] / 16)} ${arr[i] % 16} `
  }
  const ree = newArr.split(" ")
  ree.pop()
  const result = ree.map((el) => (+el - 9 > 0 ? hexArr[el - 10] : el)).join("")
  return result;
}

console.log(rgb(173, 355, 47)) /* 'ADFF2F' */
