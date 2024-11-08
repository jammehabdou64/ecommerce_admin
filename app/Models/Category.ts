import { Model } from "jcc-eloquent";

export class Category extends Model {
  //

  protected static casts = {
    created_at: "date",
  };

  public products() {
    return this.hasMany("Product", "category_id");
  }
}
