const XO = str => {
  const split = str.toLowerCase().split("");
  const x = split.filter((letter) => letter == 'x');
  const o = split.filter((letter) => letter == 'o');

  return x.length == o.length;
}

console.log(XO("xo'"));
console.log(XO("XO"));
console.log(XO("xxxoo"));
console.log(XO("xxOo"));
console.log(XO("zpzpzpp"))
console.log(XO(''));