function repeatedString(s, n) {
  // Write your code here

  const length = s.length;
  const repeat = Math.floor(n / length);
  const remainder = n % length;

  const patternA = /a/g;
  const countAOfS = s.match(patternA)?.length;
  if (!countAOfS) return 0;

  let subS = s.substring(0, remainder);
  let countAOfSubS = subS?.match(patternA)?.length ?? 0;
  return repeat * countAOfS + +countAOfSubS;
}

const s = 'aba';
console.log(repeatedString(s, 10));
