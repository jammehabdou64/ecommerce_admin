import { CategoriesController } from "@Controllers/CategoriesController";
import { CustomersController } from "@Controllers/CustomersController";
import { ProductsController } from "@Controllers/ProductsController";
import { UsersController } from "@Controllers/UsersController";
import { ApiRoute } from "jcc-express-mvc/Route";

ApiRoute.prefix("/users")
  .controller(UsersController)
  .group((Route) => {
    Route.get("/", "index");
    Route.post("/", "store");
    Route.get("/{user}", "show");
    Route.patch("/{user}", "update");
    Route.delete("/{user}", "destroy");
  });

ApiRoute.prefix("/categories")
  .controller(CategoriesController)
  .group((Route) => {
    Route.get("/", "index");
    Route.post("/", "store");
    Route.get("/{category}", "show");
    Route.patch("/{category}", "update");
    Route.delete("/{category}", "destroy");
  });

ApiRoute.prefix("/products")
  .controller(ProductsController)
  .group((Route) => {
    Route.get("/", "index");
    Route.post("/", "store");
    Route.get("/{product}", "show");
    Route.patch("/{product}", "update");
    Route.delete("/{product}", "destroy");
  });

ApiRoute.prefix("/customers")
  .controller(CustomersController)
  .group((Route) => {
    Route.get("/", "index");
    Route.post("/", "store");
    Route.get("/{customer}", "show");
    Route.patch("/{customer}", "update");
    Route.delete("/{customer}", "destroy");
  });
