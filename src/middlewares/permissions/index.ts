import { shield } from "graphql-shield";
import { isAuthenticated, notAuthenticated } from "./rules";

export const permissions = shield(
  {
    Mutation: {
      "*": isAuthenticated,
      signIn: notAuthenticated,
    },
    Query: {
      "*": isAuthenticated,
    },
  },
  {
    fallbackError: "Unauthorized request!",
    allowExternalErrors: true,
  }
);
