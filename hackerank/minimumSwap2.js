// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swapCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != i + 1) {
      [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
      swapCount++;
      i--;
    }
  }

  return swapCount;
}

const arr = [7, 1, 3, 2, 4, 5, 6];
minimumSwaps(arr);
