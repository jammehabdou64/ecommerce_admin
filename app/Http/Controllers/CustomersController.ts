import { CustomerService } from "@/Services/CustomerService";
import { Inject } from "jcc-express-mvc/Dependency";
import { Request, Response, Next } from "jcc-express-mvc/http";

export class CustomersController {
  //
  constructor(
    @Inject("CustomerService")
    private customer: CustomerService,
  ) {
    // console.log(customer);
  }

  /**
   *@access public
   * @return  Express Request Response
   */
  create(req: Request, res: Response, next: Next) {
    //
  }
  /**
   *@access public
   * @return  Express Request Response
   */
  async index(req: Request, res: Response, next: Next) {
    //
    return res.json({ message: await this.customer.all(req), success: true });
  }

  /**
   *
   *@access public
   * @return Express Request Response
   */
  store(req: Request, res: Response, next: Next) {
    //
  }

  /**
   *@access public
   *@param {id} - string
   * @return Express Request Response
   */
  async show(req: Request, res: Response, next: Next) {
    //
    return res.json({ message: await this.customer.find(req.params.customer) });
  }

  /**
   *
   *@access public
   * @param {id} - string
   * @return Express Request Response
   */
  update(req: Request, res: Response, next: Next) {
    //
  }

  /**
   *@access public
   * @param  {id} - string
   * @return Express Response
   */
  destroy(req: Request, res: Response, next: Next) {
    //
  }
}
