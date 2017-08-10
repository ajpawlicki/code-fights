// You have been tasked with creating a function that rotates a value inside an array to another index in
// the array. Unfortunately, the person using this function has a tendency of submitting garbage inputs and
// blaming you for it.

// Build a function that does the following:

// Rotates the values int located in index start to index end.
// If this is impossible, rotate to the closest approximate.
// Example
// For values = [1, 2, 3], start = 0 and end = 2, the output should be
// rotateArrayFromIndex(values, start, end) = [2, 3, 1].

function rotateArrayFromIndex(values, start, end) {
  if (values[start] === undefined) start = start < 0 ? 0 : values.length - 1;
  if (values[end] === undefined) end = end > values.length - 1 ? values.length - 1 : 0;

  let startValue = values[start];
  let i;

  if (start < end) {
    for (i = start; i < end; i++) {
      values[i] = values[i+1];
    }
  } else if (start > end) {
    for (i = start; i >= end; i--) {
      values[i] = values[i-1];
    }
  }

  values[end] = startValue;

  return values;
};

const swap = (array, i, j) => {
  let saved = array[i];
  array[i] = array[j];
  array[j] = saved;
};

ty
console.log(rotateArrayFromIndex([1,2,3], 0 , 2));
console.log(rotateArrayFromIndex([1, 5, 9, 2, 11, 84, 2], 19, 0));