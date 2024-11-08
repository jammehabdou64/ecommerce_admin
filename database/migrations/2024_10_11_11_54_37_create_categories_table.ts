import { Schema } from "jcc-eloquent";
export class Migration {
  up() {
    return Schema.create("categories", (table) => {
      table.id();
      table.string("name").unique();
      table.string("description").nullable();
      table.timestamps();
      table.softDeletes();
    });
  }

  down() {
    return Schema.dropTable("categories");
  }
}
