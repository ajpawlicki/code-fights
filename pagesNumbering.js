// Given a number of the pages in some book find the number of digits one needs to print to enumerate
// the pages of the book.

// Example

// For n = 11, the output should be
// pagesNumbering(n) = 13.

function pagesNumbering(n) {
  const digits = JSON.stringify(n).split('').length;

  if (n < 10) return n;

  let pages = 0;
  let pagesToAddForDigit, floorPlace;

  for (let i = 2; i <= digits; i++) {
    pagesToAddForDigit = Math.pow(10, i-1) - 1;
    floorPlace = Math.pow(10, i-2);
    pages += (i-1)* (Math.floor(pagesToAddForDigit / floorPlace) * floorPlace);
  }

  let diff = n - pagesToAddForDigit;
  pages += digits * diff;

  return pages;
}

console.log(pagesNumbering(11));