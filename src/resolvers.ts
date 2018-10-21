import { authors, books, IAuthor, IBook } from "./data";
import { typedArgs } from "./utils/utils";

interface IContext {
  authors: IAuthor[];
  books: IBook[];
}

// create the context to be used for graphql queries
const context: IContext = {
  authors,
  books,
};

// A map of functions which return data for the schema.
const resolvers = {
  Book: {
    author: (book: IBook, args: any, ctx: IContext) =>
      ctx.authors.find(author => author.name === book.authorName),
  },
  Query: {
    author: typedArgs((root, args: { authorName: string }, ctx: IContext) => {
      return ctx.authors.filter(author => author.name === args.authorName);
    }),
    book: typedArgs((root, args: { title: string }, ctx: IContext) => {
      return ctx.books.find(book => book.title === args.title);
    }),
    books: (root: any, args: any, ctx: IContext) => ctx.books,
  },
};

export { context, resolvers };
