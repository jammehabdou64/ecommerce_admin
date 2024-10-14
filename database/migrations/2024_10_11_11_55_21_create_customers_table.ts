import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("customers", (table) => {
      table.id();
      table.string("name");
      table.string("email").unique();
      table.string("address");
      table.string("phone");
      table.timestamps();
      table.softDeletes();
    });
  }

  down() {
    return Schema.dropTable("customers");
  }
}
