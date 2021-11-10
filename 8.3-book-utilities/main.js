// 1. create 2 book objects with properties: name, author, year.
const book1 = {
  name: "Story of my life",
  author: "Emanuel Yaish",
  year: "2019",
};
const book2 = {
  name: "Story of my life 2",
  author: "Emanuel Yaish",
  year: "2021",
};
// 2. create an empty object bookUtils (utils = short for utilities).
const bookUtils = {};

// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
bookUtils.getFirstPublished = function (bookA, bookB) {
  bookA.year < bookB.yaer ? bookA : bookB;
};

// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
bookUtils.setNewEdition = function (book, editionYear) {
  book.latestEdition = editionYear;
};

bookUtils.setNewEdition(book1, 2020);
console.log(book1);
bookUtils.setNewEdition(book1, 2021);
console.log(book1);
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the language, or
// updates an existing one.
bookUtils.setLanguage = function (book, language) {
  book.language = language;
};

bookUtils.setLanguage(book2, "English");
console.log(book2);
bookUtils.setLanguage(book2, "Hebrew");
console.log(book2);

// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.

bookUtils.setTranslation = function (book, language, translator) {
  book.translation = { language, translator };
};

bookUtils.setTranslation(book2, "English", "Emanuel yaish");
console.log(book2);

// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.

bookUtils.setPublisher = function (book, name, location) {
  book.publisher = { name, location };
};

bookUtils.setPublisher(book1, "Emanuel yaish", "Israel");
console.log(book1);

// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.

bookUtils.isSamePublisher = function (bookA, bookB) {
  if (bookA.publisher && bookB.publisher)
    return bookA.publisher.name === bookB.publisher.name;
  else return false;
};

bookUtils.isSamePublisher(book1, book2);
console.log(book1);
console.log(book2);
console.log(bookUtils.isSamePublisher(book1, book2));

bookUtils.setPublisher(book2, "Emanuel yaish", "Israel");
console.log(book1);
console.log(book2);
console.log(bookUtils.isSamePublisher(book1, book2));
