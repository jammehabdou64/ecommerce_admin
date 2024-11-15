import { Model } from "jcc-eloquent";

export class Product extends Model {
  //
  protected static casts = {
    getPrice: this.getPriceAttribute,
    setPrice: this.setPriceAttribute,
    getQuantity: this.getQuantityAttribute,
    setQuantity: this.setQuantityAttribute,
    getBalance: this.getBalanceAttribute,
    setBalance: this.setBalanceAttribute,
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
    console.log(value);
    return Number(value) * 100;
  }

  private static getBalanceAttribute(value: string) {
    return Number(value) / 100;
  }

  private static setBalanceAttribute(value: string, attribute: any) {
    return value ? Number(value) * 100 : attribute["quantity"];
  }

  public static booted() {
    //
    console.log("object");
    this.saving((product) => {
      console.log({ product });
      // product["balance"] = product["quantity"];
    });

    this.saved((data) => {
      console.log({ saved: data });
    });
  }
}
