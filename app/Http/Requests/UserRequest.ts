import { User } from "@/Model/User";
import { bcrypt, FormRequest, Request } from "jcc-express-mvc";

export class UserRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    return this.apiValidate({
      name: ["required"],
      email: ["required", `${this.route("users") ? "unique:users" : "next"}`],
      primary_phone: ["required", "min:7"],
      secondary_phone: ["nullable"],
    });
  }

  async save() {
    await this.rules();
    const { name, email, password, primary_phone, secondary_phone } = {
      ...this.request(),
    };

    const user: any = this.route("user")
      ? await User.find(this.route("user"))
      : new User();
    user.name = name;
    user.email = email;
    user.password = await bcrypt(`${password}`);
    user.primary_phone = primary_phone;
    user.secondary_phone = secondary_phone;

    return user.save();
  }
}
