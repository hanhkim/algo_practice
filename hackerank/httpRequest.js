'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  main();
});

const fetchAPI = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          resolve(JSON.parse(data));
        });
      })
      .on('error', (err) => {
        console.log('Error: ' + err.message);
        reject(err);
      });
  });

const getUserInfo = (username) => {
  const url = `https://jsonmock.hackerrank.com/api/article_users?username=${username}`;
  return fetchAPI(url);
};

const getTransaction = (userId) => {
  const url = `https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`;
  return fetchAPI(url);
};

async function getNumTransactions(username) {
  return getUserInfo(username)
    .then((res) => {
      console.log(res);
      if (res?.total > 0) {
        const userId = res?.data[0]?.id;
        return getTransaction(userId).then((response) => {
          return response?.total;
        });
      } else {
        return 'User not found';
      }
    })
    .catch((err) => {
      return err;
    });
}

async function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  // const username = readLine().trim();
  // const result = await getNumTransactions('epaga');
  const result = await getNumTransactions('abc');
  console.log('resutl: ', result);
  // ws.write(result.toString());
}

main();
