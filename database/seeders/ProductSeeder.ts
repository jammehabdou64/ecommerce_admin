import { Product } from "../../app/Models/Product";

export class ProductSeeder {
  //

  async run() {
    const products = [
      {
        name: "Soft Drink",
        category_id: 1,
        description: "Soft Drinks",
        price: 20,
        quantity: 100,
        threshold: "10",
      },
      {
        name: "Facebook",
        category_id: 2,
        description: "Facebook",
        price: 20,
        quantity: 100,
        threshold: "10",
      },
    ];
    return await Product.create(products);
  }
}
