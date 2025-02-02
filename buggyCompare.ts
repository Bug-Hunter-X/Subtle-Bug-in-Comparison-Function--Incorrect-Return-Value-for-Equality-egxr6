function compare(a: number, b: number): number {
  if (a > b) {
    return 1; // Correct
  } else if (a < b) {
    return -1; // Correct
  } else {
    return 0; // Correct
  }
}

function buggyCompare(a: number, b: number): number {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 1; // BUG: Should return 0
  }
}