import { UsersController } from "@Controllers/UsersController";
import { ApiRoute } from "jcc-express-mvc";

ApiRoute.prefix("/users")
  .controller(UsersController)
  .group((Route) => {
    Route.get("/", "index");
    Route.post("/", "store");
    Route.get("/{user}", "show");
    Route.patch("/{user}", "update");
    Route.delete("/{user}", "destroy");
  });
