import { Schema } from "jcc-eloquent";

//
export class Migration {
  up() {
    return Schema.create("users", (table) => {
      table.id();
      table.string("name");
      table.string("email").unique();
      table.string("password");
      table.string("primary_phone").unique();
      table.string("secondary_phone").nullable();
      table.string("role").default("2");
      table.timestamps();
      table.softDeletes();
    });
  }

  down() {
    return Schema.dropTable("users");
  }
}
