import { CategorySeeder } from "./CategorySeeder";
import { CustomerSeeder } from "./CustomerSeeder";
import { ProductSeeder } from "./ProductSeeder";
import { UserSeeder } from "./UserSeeder";

export class DatabaseSeeder {
  async run() {
    //
    return [
      //
      UserSeeder,
      CustomerSeeder,
      CategorySeeder,
      ProductSeeder,
    ];
  }
}
