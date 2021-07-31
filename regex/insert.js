// https://javascript.info/regexp-lookahead-lookbehind

let regexp = /(?<=\<body.*?\>)\s/im;

let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

str = str.replace(regexp, `<h1>Hello</h1>`);
console.log(str);
