// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

const { kill } = require('process');

// Complete the countTriplets function below.
// function countTriplets(arr, r) {
//   let count = 0;

//   for (let i = 0; i < arr.length - 2; i++) {
//     // xet toi phan tu cuoi thu 3 thui
//     let triplet1 = arr[i];
//     let triplet2 = triplet1 * r;

//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[j] === triplet2) {
//         // di tim triplet3
//         let triplet3 = triplet2 * r;

//         for (let k = j + 1; k < arr.length; k++) {
//           if (arr[k] === triplet3) {
//             count++;
//           }
//         }
//       }
//     }
//   }

//   return count;
// }
// var f = [];
// function factorial(n) {
//   if (n == 0 || n == 1) return 1;
//   if (f[n] > 0) return f[n];
//   return (f[n] = factorial(n - 1) * n);
// }

// // Complete the countTriplets function below.
// function countTriplets(arr, r) {
//   let count = 0;
//   arr.sort(function (a, b) {
//     return a - b;
//   });

//   let hashArr = {};
//   let tripletsGroups = [];

//   arr.map((a, index) => {
//     if (hashArr[a]) {
//       hashArr[a] += 1;
//     } else {
//       hashArr[a] = 1;
//       if (index < arr.length - 2) tripletsGroups.push([a, a * r, a * r * r]);
//     }
//   });

//   tripletsGroups.map((triplet) => {
//     if (hashArr[triplet[0]] && hashArr[triplet[1]] && hashArr[triplet[2]]) {
//       if (triplet[0] === triplet[1]) {
//         count += Math.floor(
//           factorial(arr.length) / (factorial(3) * factorial(arr.length - 3))
//         );
//       } else {
//         count +=
//           hashArr[triplet[0]] * hashArr[triplet[1]] * hashArr[triplet[2]];
//       }
//     }
//   });

//   console.log(tripletsGroups, hashArr, count);
//   return count;
// }

// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let count = 0;
  const map = {};
  const doubles = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = arr[i];
    let rx = x * r;
    let r2x = rx * r;
    let pairWeWant = [rx, r2x];
    console.log(pairWeWant);

    if (doubles[pairWeWant] !== undefined) {
      count = count + doubles[pairWeWant];
    }

    let doub = [x, rx];
    debugger;
    if (doubles[doub] == undefined) doubles[doub] = 0;
    doubles[doub] = doubles[doub] + (map[rx] == undefined ? 0 : map[rx]);
    // Add x to map
    map[x] == undefined ? (map[x] = 1) : map[x]++;
  }
  console.log(count);
  return count;
}

const arr = [1, 3, 9, 9, 27, 81];
const r = 3;

countTriplets(arr, r);
