function compare(a: number, b: number): number {
  if (a > b) {
    return 1; 
  } else if (a < b) {
    return -1; 
  } else {
    return 0; 
  }
}

function correctBuggyCompare(a: number, b: number): number {
  return a === b ? 0 : (a > b ? 1 : -1);
}