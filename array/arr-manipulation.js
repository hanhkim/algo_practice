function processData(input) {
  var splitInput = input.split('\n');
  var listSize = parseInt(splitInput[0].split(' ')[0]);
  var numInserts = parseInt(splitInput[0].split(' ')[1]);
  var max = 0;
  var amounts = Array(listSize);

  for (var i = 0; i < numInserts; i++) {
    // input is 1 based
    var start = parseInt(splitInput[i + 1].split(' ')[0]) - 1;
    var end = parseInt(splitInput[i + 1].split(' ')[1]);
    var amount = parseInt(splitInput[i + 1].split(' ')[2]);

    amounts[start] = amounts[start] || 0;
    amounts[start] = amounts[start] + amount;

    amounts[end] = amounts[end] || 0;
    amounts[end] = amounts[end] - amount;
  }

  var current = 0;
  for (var i = 0; i < listSize; i++) {
    current += amounts[i] || 0;
    if (current > max) {
      max = current;
    }
  }

  console.log(max);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  console.log('hanh: ', input);
  _input += input;
  processData(_input);
});

process.stdin.on('end', function () {
  processData(_input);
});
