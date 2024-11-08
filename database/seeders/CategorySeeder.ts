import { Category } from "../../app/Models/Category";
export class CategorySeeder {
  //

  async run() {
    const categories = [
      {
        name: "Beverages",
        description: "Beverages",
      },
      {
        name: "Textile",
        description: "Textile",
      },
    ];

    return await Category.create(categories);
  }
}
