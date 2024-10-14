
import { ServiceProvider } from "jcc-express-mvc/lib/Services/ServiceProvider";

export class AppServiceProvider extends ServiceProvider {
  constructor(app: any) {
    super(app);
  }

  public register(): void {
   
  }

  public boot(): void {
    // console.log("It woork");
  }
}
