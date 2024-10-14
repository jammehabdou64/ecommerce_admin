import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("order_items", (table) => {
      table.id();
      table.unsignedBigInteger("order_id");
      table.unsignedBigInteger("product_id");
      table.string("quantity");
      table.string("price");
      table.timestamps();
      table.softDeletes();
      table.foreign("order_id").references("id").on("orders");
      table.foreign("product_id").references("id").on("products");
    });
  }

  down() {
    return Schema.dropTable("order_items");
  }
}
