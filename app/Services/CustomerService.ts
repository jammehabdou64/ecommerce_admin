import { Customer } from "../Models/Customer";
import { Request } from "jcc-express-mvc/http";

export class CustomerService {
  async all(req: Request) {
    return Customer.paginate(req, 15);
  }

  async find(id: string) {
    return Customer.find(id);
  }
}
