import { Route } from "jcc-express-mvc";

Route.get("*", (req, res) => res.render("layout/app"));
