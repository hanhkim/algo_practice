// function sockMerchant(n, ar) {
//   let hashArr = [];
//   let coupleSocksCount = 0;

//   ar.map((e) => {
//     let existed = hashArr.findIndex((hash) => {
//       return hash.key === e;
//     });

//     if (existed > -1) {
//       hashArr[existed].count++;
//     } else {
//       hashArr.push({ key: e, count: 1 });
//     }
//   });

//   hashArr.map((hash) => {
//     if (hash.count > 1) {
//       coupleSocksCount += Math.floor(hash.count / 2);
//     }
//   });

//   return coupleSocksCount;
// }

function sockMerchant(n, ar) {
  var ones = {};
  return ar.reduce((pairs, i) => {
    if (ones[i]) {
      delete ones[i];
      return pairs + 1;
    } else {
      ones[i] = true;
      return pairs;
    }
  }, 0);
}

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(0, ar));
