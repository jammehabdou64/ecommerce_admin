import helmet from "helmet";
import cors from "cors";
import session from "express-session";
// import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";

export class Kernel {
  //
  //
  protected middleware = [
    cookieParser(),
    cors(),
    session({
      secret: "ggggggg",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
    }),
    flash(),
  ];
}
