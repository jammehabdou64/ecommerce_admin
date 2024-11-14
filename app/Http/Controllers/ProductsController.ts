import { Request, Response, Next } from "jcc-express-mvc/http";
import { Product } from "@/Model/Product";
import { ProductRequest } from "@/Request/ProductRequest";

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
  async store(req: Request, res: Response, next: Next) {
    //

    const productRequest = new ProductRequest(req);
    const save = await productRequest.save();
    return save //res.json({ message: save });
      ? res.json({ message: "Product successfully added!", success: true })
      : res.json({ message: null, success: false });
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
  async update(req: Request, res: Response, next: Next) {
    //
    const productRequest = new ProductRequest(req);
    const save = await productRequest.save();
    return save //res.json({ message: save });
      ? res.json({ message: "Product successfully updated!", success: true })
      : res.json({ message: null, success: false });
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
