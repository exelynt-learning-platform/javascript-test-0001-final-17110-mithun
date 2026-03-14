function printPattern(size) {
  const middle = Math.floor(size / 2);
  for (let i = 0; i < size; i++) {
    let row = i <= middle ? i : size - i - 1;
    let output = "";
    for (let j = 0; j < middle - row; j++) {
      output += " ";
    }
    output += "*";
    if (row > 0) {
      for (let k = 0; k < (2 * row - 1); k++) {
        output += " ";
      }
      output += "*";
    }
    console.log(output);
  }
}

printPattern(9);