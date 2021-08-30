const f1 = () => {
  let t = 0;

  const f2 = () => {
    return t++;
  };

  return f2;
};

let result = f1();
result();
result();

let a = result();

console.log(a);
