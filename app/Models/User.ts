import { Model } from "jcc-eloquent";

export class User extends Model {
  protected static hidden = ["password"];
  protected static softDelete: boolean = true;
  protected static casts = {
    created_at: "date",
  };
}
