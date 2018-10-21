interface IBook {
  authorName: string;
  title: string;
}

interface IAuthor {
  name: string;
  books: Iterable<IBook>;
}

const books: IBook[] = [
  {
    authorName: "J.K. Rowling",
    title: "Harry Potter and the Chamber of Secrets",
  },
  {
    authorName: "J.K. Rowling",
    title: "Harry Potter and the Philospher's Stone",
  },
  {
    authorName: "Michael Crichton",
    title: "Jurassic Park",
  },
];

// Create the authors "table"
const authors: IAuthor[] = Array.from(new Set(books.map(book => book.authorName))).map(author => {
  return { name: author, books: books.filter(book => book.authorName === author) };
});

export { IAuthor, IBook, books, authors };
