import { Request, Response, Next } from "jcc-express-mvc/http";
import { Product } from "@/Model/Product";

export class ProductsController {
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
    return res.json({
      message: await Product.with("category").paginate(req, 15),
      success: true,
    });
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
  show(req: Request, res: Response, next: Next) {
    //
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
