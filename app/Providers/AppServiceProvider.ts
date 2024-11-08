import { Container } from "jcc-express-mvc/Container";
import { ServiceProvider } from "jcc-express-mvc/lib/Services/ServiceProvider";
import { CustomerService } from "../Services/CustomerService";

export class AppServiceProvider extends ServiceProvider {
  constructor(app: Container) {
    super(app);
  }

  public register(): void {
    this.app.bind<CustomerService>(
      "CustomerService",
      () => new CustomerService(),
    );
  }

  public boot(): void {}
}
