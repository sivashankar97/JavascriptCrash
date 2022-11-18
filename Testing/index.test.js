const { forEach, map } = require("./index");

let sum = 0;
forEach([1, 2, 3], (value) => {
  sum += value;
});

if (sum !== 6) {
  throw new Error("Expected summ to equal 6");
}

const result = map([1, 2, 3], (value) => {
  return value * 2;
});

if (result[0] !== 2) {
  throw new Error(`Expected to 2,found ${result[0]}`);
}
if (result[1] !== 4) {
  throw new Error(`Expected to 4,found ${result[0]}`);
}
if (result[2] !== 6) {
  throw new Error(`Expected to 6,found ${result[0]}`);
}
