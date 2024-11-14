import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.table("products", (table) => {
      table.string("balance").nullable().after("price");
      table.string("image").nullable().after("name");
      table.string("threshold").nullable().after("price");
    });
  }

  down() {
    return Schema.table("products", (table) => {
      table.dropColumns("balance", "image", "threshold");
    });
  }
}
