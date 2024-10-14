import { ConsoleKernel, TinkerCommand } from "jcc-express-mvc/cli";
import { app } from "jcc-express-mvc/Dependency";

app.singleton<ConsoleKernel>("ConsoleKernel", () => new ConsoleKernel());
app.singleton<TinkerCommand>("Tinker", () => new TinkerCommand());

export { app };
