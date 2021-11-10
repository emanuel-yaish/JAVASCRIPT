const book = {
  price: 45,
  pages: 210,
  author: "Emanuel yaish",
  name: "Story of my life",
  year: "2021",
};

function bookDescription(book) {
  return `The book ${book.name} was written by ${book.author} in the year ${book.year}`;
}

console.log(bookDescription(book));
