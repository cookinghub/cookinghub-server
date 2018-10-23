import { ApolloServer } from "apollo-server-express";
import express from "express";

import { context, resolvers } from "./resolvers";
import { typeDefs } from "./schemas/schema.graphql";
import { logger } from "./utils/logger";

const server = new ApolloServer({
  context,
  resolvers,
  typeDefs,
});

// Create Express server
const app = express();
server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  logger.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
