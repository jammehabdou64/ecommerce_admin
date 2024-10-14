import { bcrypt } from "jcc-express-mvc";
import { User } from "../../app/Models/User";
export class UserSeeder {
  //

  async run() {
    const users = [
      {
        name: "Administrator",
        email: "admin@example.com",
        password: await bcrypt("password"),
        primary_prone: "7501025",
      },
      {
        name: "User",
        email: "user@example.com",
        password: await bcrypt("password"),
        primary_phone: "3747825",
      },
    ];

    await User.create(users);
  }
}
