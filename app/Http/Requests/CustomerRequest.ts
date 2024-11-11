import { Customer } from "@/Model/Customer";
import { FormRequest } from "jcc-express-mvc/FormRequest";
import { Request } from "jcc-express-mvc/http";
export class CustomerRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.apiValidate({
      name: ["required"],
      email: [
        "required",
        `${this.route("customers") ? "unique:customers" : "next"}`,
      ],
      phone: [
        "required",
        "min:7",
        `${this.route("customers") ? "unique:customers" : "next"}`,
      ],
      address: ["required"],
    });
  }

  async save() {
    await this.rules();
    const { name, email, phone, address } = { ...this.request() };
    const customer: any = this.route("customer")
      ? await Customer.find(this.route("customer"))
      : new Customer();
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    customer.address = address;
    return customer.save();
  }
}
