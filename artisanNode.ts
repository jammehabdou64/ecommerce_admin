import { app } from "./bootstrap/app";

const kernel = app.resolve<any>("ConsoleKernel");

(async function () {
  await kernel.parse(process.argv);
  process.exit(0);
})();
