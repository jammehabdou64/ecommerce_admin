import { Request, Response, Next } from "jcc-express-mvc/http";
import { Category } from "@/Model/Category";

export class CategoriesController {
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
      message: await Category.with("products").paginate(req, 15),
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
  async show(req: Request, res: Response, next: Next) {
    //
    const category: any = await Category.find(req.params.category);
    return res.json({
      message: await category.load("products"),
      success: true,
    });
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
