console.log("My console from js script");
const checkFunction = (num) => {
  if (num > 15) {
    return num;
  } else {
    return 15;
  }
};

const myArr = [15, 12, 54, 13, 65, 43];

myArr.forEach((element) => {
  console.log("Given number is", { element });
  const num1 = checkFunction(element);
  console.log("Result is", { num1 });
});
