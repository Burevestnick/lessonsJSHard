let num = 266219

function getDigit() {
  num = [...num+''].map(Number)
  sum = 1
  for (let i = 0; i < num.length; ++i) {
    sum *= num[i];
  }
  console.log(sum);

  sum = (sum ** 3).toString();
  console.log(+(sum.slice(0, 2)));
}

getDigit(num);



