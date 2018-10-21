import { gql, IFieldResolver } from "apollo-server-express";
import { readFileSync } from "fs";
import { DocumentNode } from "graphql";
import { posix } from "path";

function typedArgs<T>(inResolver: IFieldResolver<any, any, T>): IFieldResolver<any, any> {
  return inResolver as IFieldResolver<any, any, { [key: string]: any }>;
}

function importSchema(fileName: string): DocumentNode {
  return gql`
    ${readFileSync(posix.resolve(fileName), "utf8")}
  `;
}

export { typedArgs, importSchema };
