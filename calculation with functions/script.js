// CODEWARS CHALLENGE
// write calculations using function and get results like

// seven(times(five())) //35
// four(plus(nine())) //13
// eight(minus(three())) //5
// six(dividedBy(two())) //3

function solve(func, value) {
  if (typeof func === "undefined") return value;
  const [operator, lastNumber] = func;
  return parseInt(eval(`${value} ${operator} ${lastNumber}`));
}

function zero(func) {return solve(func, 0)}
function one(func) {return solve(func, 1);}
function two(func) {return solve(func, 2);}
function three(func) {return solve(func, 3);}
function four(func) {return solve(func, 4);}
function five(func) {return solve(func, 5);}
function six(func) {return solve(func, 6);}
function seven(func) {return solve(func, 7);}
function eight(func) {return solve(func, 8);}
function nine(func) {return solve(func, 9);}

function plus(val) {return ["+", val];}
function minus(val) {return ["-", val];}
function times(val) {return ["*", val];}
function dividedBy(val) {return ["/", val];}


