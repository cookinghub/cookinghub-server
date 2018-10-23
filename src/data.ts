interface IRecipe {
  authorName: string;
  title: string;
  content: string;
}

interface IUser {
  name: string;
  recipes: IRecipe[];
}

const mockRecipes: IRecipe[] = [
  {
    authorName: "Chef A",
    content: "This is a recipe, can't you see?",
    title: "Yummy Sandwhich",
  },
  {
    authorName: "Chef A",
    content: "This is a different recipe!",
    title: "Delicious cake",
  },
  {
    authorName: "Chef B",
    content: "Something completely different",
    title: "Pizza",
  },
];

class DataBase {
  private recipesData: IRecipe[];
  constructor(recipesData: IRecipe[]) {
    this.recipesData = recipesData;
  }

  public async users(): Promise<IUser[]> {
    const authorNames = Array.from(new Set(this.recipesData.map(r => r.authorName)));
    return Promise.resolve(
      authorNames.map(author => {
        return { name: author, recipes: this.recipesData.filter(r => r.authorName === author) };
      }),
    );
  }

  public async recipes(): Promise<IRecipe[]> {
    return Promise.resolve(this.recipesData);
  }

  public async recipeByTitle(title: string): Promise<IRecipe | undefined> {
    return (await this.recipes()).find(r => r.title === title);
  }

  public async userByName(userName: string): Promise<IUser | undefined> {
    return (await this.users()).find(u => u.name === userName);
  }
}

const database = new DataBase(mockRecipes);

export { IRecipe, IUser, DataBase, database };
