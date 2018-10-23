import { DataBase } from "../src/data";

describe("DB tests", () => {
  test("initialize with no data", async () => {
    const database = new DataBase([]);
    expect(await database.recipes()).toEqual([]);
    expect(await database.users()).toEqual([]);
  });
  test("works with a multiple recipes", async () => {
    const data = [
      {
        authorName: "usera",
        content: "blablabla",
        title: "title1",
      },
      {
        authorName: "userb",
        content: "blablabla",
        title: "title2",
      },
    ];
    const database = new DataBase(data);
    const recipes = await database.recipes();
    const users = await database.users();
    expect(recipes.length).toBe(2);
    expect(recipes.map(r => r.title)).toEqual(["title1", "title2"]);
    expect(users.length).toBe(2);
    expect(users.map(u => u.name)).toEqual(["usera", "userb"]);
  });
  test("find by title or author", async () => {
    const recpies = [
      {
        authorName: "usera",
        content: "blablabla",
        title: "title1",
      },
      {
        authorName: "usera",
        content: "blablabla",
        title: "title2",
      },
    ];
    const database = new DataBase(recpies);
    expect(await database.userByName("usera")).toMatchObject({ name: "usera" });
    expect(await database.recipeByTitle("title1")).toMatchObject({ title: "title1" });
  });
});
