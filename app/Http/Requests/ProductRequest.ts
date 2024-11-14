import { Product } from "@/Model/Product";
import { FormRequest } from "jcc-express-mvc/FormRequest";
import { Request } from "jcc-express-mvc/http";
export class ProductRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.apiValidate({
      //
      name: ["required"],
      category_id: ["required"],
      quantity: ["required"],
      price: ["required"],
      threshold: ["required"],
      description: ["nullable"],
    });
  }

  async save() {
    await this.rules();
    const { name, category_id, quantity, price, threshold, description } =
      this.request();
    const product: any = this.route("product")
      ? await Product.find(this.route("product"))
      : new Product();
    product.name = name;
    product.category_id = category_id;
    product.quantity = quantity;
    product.price = price;
    product.threshold = threshold;
    product.description = description;

    product.image = this.hasFile("image")
      ? this.getHost(this.file("image").store("/images/products"))
      : product.image || "";

    return product.save();
  }

  private getHost(file: string) {
    return ` ${this.req.protocol}://${this.req.get("host")}/images/products/${file}`;
  }
}
