import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("orders", (table) => {
      table.id();
      table.unsignedBigInteger("customer_id");
      table.string("total_amount");
      table.timestamps();
      table.softDeletes();
      table.foreign("customer_id").references("id").on("customers");
    });
  }

  down() {
    return Schema.dropTable("orders");
  }
}
