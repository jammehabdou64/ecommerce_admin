import { FormRequest } from "jcc-express-mvc/FormRequest";
import { Request } from "jcc-express-mvc/http";

export class UserRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.apiValidate({
      //
    });
  }

  async save() {
    await this.rules();
  }
}
