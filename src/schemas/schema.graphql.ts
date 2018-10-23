import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Recipe {
    id: ID!
    title: String!
    author: User!
    content: String
  }

  type User {
    id: ID!
    name: String!
    recpies: [Recipe]!
  }

  type Query {
    recipe(title: String, id: String): Recipe
    recipes: [Recipe]!
    user(id: ID): User
    users: [User]
  }

  schema {
    query: Query
  }
`;

export { typeDefs };
