import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("products", (table) => {
      table.id();
      table.string("name");
      table.unsignedBigInteger("category_id");
      table.string("description").nullable();
      table.string("price");
      table.string("quantity");
      table.timestamps();
      table.softDeletes();
      table.foreign("category_id").references("id").on("categories");
    });
  }

  down() {
    return Schema.dropTable("products");
  }
}
