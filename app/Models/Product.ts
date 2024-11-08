import { Model } from "jcc-eloquent";

export class Product extends Model {
  //
  protected static casts = {
    getPrice: this.getPriceAttribute,
    setPrice: this.setPriceAttribute,
    getQuantity: this.getQuantityAttribute,
    setQuantity: this.setQuantityAttribute,
    created_at: "date",
  };

  public category() {
    return this.belongsTo("Category", "category_id");
  }

  private static getPriceAttribute(value: string) {
    return Number(value) / 100;
  }

  private static setPriceAttribute(value: string) {
    return Number(value) * 100;
  }

  private static getQuantityAttribute(value: string) {
    return Number(value) / 100;
  }

  private static setQuantityAttribute(value: string) {
    return Number(value) * 100;
  }
}
