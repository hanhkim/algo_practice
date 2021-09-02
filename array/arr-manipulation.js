// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs[0]=interview-preparation-kit&playlist_slugs[1]=arrays&fbclid=IwAR2LdBgSdUlk4M9WvEd-qOR0fGZX4Lwzf9tF31hcKIC80bEv2Kv6LEwuNb4

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  // Write your code here

  let filledArr = new Array(n).fill(0);

  queries.forEach((query) => {
    let [a, b, k] = query;
    for (let i = a - 1; i <= b - 1; i++) {
      filledArr[i] += k;
    }
  });

  return Math.max(...filledArr);
}

const queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

const max = arrayManipulation(10, queries);

console.log(max);
