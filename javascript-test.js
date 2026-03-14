function printPattern(size) {
  var middle = Math.floor(size / 2);
  for (var i = 0; i < size; i++) {
    var row = i <= middle ? i : size - i - 1;
    var output = "";
    for (var j = 0; j < middle - row; j++) {
      output += " ";
    }
    output += "*";
    if (row > 0) {
      for (var k = 0; k < (2 * row - 1); k++) {
        output += " ";
      }
      output += "*";
    }

    console.log(output);
  }
}

printPattern(9);