// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// FIRST TRIAL
function high(x) {
  const arr = x.split(" ");
  let result = [];

  for (const word of arr) {
    let count = 0;
    for (const j of word) {
      count += j.charCodeAt() - 96;
    }
    result.push(count);
  }

  const highestNumber = Math.max(...result);
  console.log(result);
  const finalWord = arr[result.indexOf(highestNumber)];
  return finalWord;
}

// REFACTOR

function high(x) {
    const allIndexArr = x
      .split(" ")
      .map((el) => [...el].reduce((a, b) => a + b.charCodeAt() - 96, 0));
    const eaxctWordIndex = allIndexArr.indexOf(Math.max(...allIndexArr));
    return x.split(" ")[eaxctWordIndex];
}



high('man i need a taxi up to ubud') // taxi
high('what time are we climbing up the volcano') // volcano
high('take me to semynak') // semynak
high('aa b') // aa
high('b aa') // b

