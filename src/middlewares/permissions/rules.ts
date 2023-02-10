import { rule } from "graphql-shield";

export const isAuthenticated = rule()(async (parent, args, { user }, info) => {
  if (!user) return new Error("Unauthorized access.");
  return !!user;
});

export const notAuthenticated = rule()(async (parent, args, { user }, info) => {
  if (!!user) return new Error("You have authenticated already.");
  return !user;
});
