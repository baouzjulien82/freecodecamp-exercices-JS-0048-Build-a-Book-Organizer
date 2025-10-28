const books = [
  { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
  { title: "Dune", authorName: "Frank Herbert", releaseYear: 1965 }
];

function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) return -1;
  if (bookA.releaseYear > bookB.releaseYear) return 1;
  return 0;
}

const filteredBooks = books.filter(book => book.releaseYear < 1950);

filteredBooks.sort(sortByYear);

console.log("All books:", books);
console.log("Filtered and sorted books:", filteredBooks);
