//https://javascript.info/regexp-alternation

// bbtag-pairs
const str = '[url][b]http://google.com[/b][/url]';

const regexp = /\[(url|quote|b)\].*?\[\/\1\]/gi;

console.log(str.match(regexp));
