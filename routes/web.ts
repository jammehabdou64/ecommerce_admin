import { UsersController } from "@Controllers/UsersController";
import { Auth, Route, auth } from "jcc-express-mvc";

Route.get("/", (req, res) => {
  return res.render("index", {
    users: [{ name: "Andou" }, { name: "Amadou" }, { name: "Lamin" }],
  });
});

Route.get("/login", (req, res) => res.render("auth/login"));

Route.get("/register", (req, res) => res.render("auth/register"));

Route.middleware(auth).get("/home", (req, res, next) => {
  return res.render("home");
});

Route.prefix("/auth").group((Route) => {
  Route.post("/login", Auth.attempt);
  Route.post("/register", [UsersController, "store"]);
});

Route.get("/logout", Auth.logout);
