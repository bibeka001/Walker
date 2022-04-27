
const ArmstrongNumber = (num) => {
  const toArrray = num.toString().split("");

  const newNum = toArrray
    .map((value) => {
      return value ** 3;
    })
    .reduce((a, b) => {
      return a + b;
    });

  if (num === newNum) {
    return `${num} is a Armstrong Number`;
  } else {
    return `${num} is not a Armstrong Number`;
  }
};
let result = ArmstrongNumber(12167);
console.log(result);
