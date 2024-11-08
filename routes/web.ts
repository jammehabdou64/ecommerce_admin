import { Route } from "jcc-express-mvc/Route";

Route.get("*", (req, res) => {
  return res.render("index");
});
