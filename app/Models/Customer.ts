import { Model } from "jcc-eloquent";

export class Customer extends Model {
  //

  protected static hidden: string[] = ["deleted_at"];

  protected static casts = {
    created_at: "date:d-m-y",
    getName: this.getName,
  };

  static getName(value: string) {
    return `${value}`.toUpperCase();
  }
}
