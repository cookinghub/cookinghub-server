import { database, DataBase, IRecipe, IUser } from "./data";
import { typedArgs } from "./utils/utils";

interface IContext {
  database: DataBase;
}

// create the context to be used for graphql queries
const context: IContext = {
  database,
};

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    recipe: typedArgs((root, args: { title: string }, ctx: IContext) => {
      return ctx.database.recipeByTitle(args.title);
    }),
    recipes: (root: any, args: any, ctx: IContext) => ctx.database.recipes(),
    user: typedArgs((root, args: { authorName: string }, ctx: IContext) =>
      ctx.database.userByName(args.authorName),
    ),
  },
  Recipe: {
    author: (recipe: IRecipe, args: any, ctx: IContext) =>
      ctx.database.userByName(recipe.authorName),
  },
};

export { context, resolvers };
