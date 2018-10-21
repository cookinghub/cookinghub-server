import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    book(title: String): Book
    books: [Book]
    author(name: String): Author
  }

  schema {
    query: Query
  }
`;

export { typeDefs };
