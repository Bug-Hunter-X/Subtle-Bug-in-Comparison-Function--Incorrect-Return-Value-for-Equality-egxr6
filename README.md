# Subtle Bug in TypeScript Comparison Function

This repository demonstrates a common, yet subtle, bug that can occur in comparison functions written in TypeScript (and other languages).

## The Bug

The `buggyCompare` function contains a logical error. When two numbers are equal, it should return 0, indicating equality. However, it incorrectly returns 1, treating equal numbers as greater than each other.

This seemingly small error can have significant consequences in applications where the comparison function is used for sorting or other operations that rely on correct equality checks. 

## How to Reproduce

1. Clone this repository.
2. Compile the TypeScript code using a TypeScript compiler (tsc).
3. Run the code and observe the unexpected behavior of `buggyCompare` when comparing equal numbers.

## Solution

The `compare.ts` file demonstrates the corrected version of the function. Note that it accurately returns 0 when the input numbers are equal.

## Lessons Learned

This example highlights the importance of careful testing and code review, particularly when dealing with core logic such as comparison functions.  Even small errors can have a large impact on the correctness of a program.