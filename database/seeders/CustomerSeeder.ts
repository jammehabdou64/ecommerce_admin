import { Customer } from "../../app/Models/Customer";
export class CustomerSeeder {
  //

  async run() {
    const customers = [
      {
        name: "Fatou Kah",
        email: "fk@gmail.com",
        address: "Serrkunda London Corner",
        phone: "7755473",
      },
      {
        name: "Lamin Bah",
        email: "lb@gmail.com",
        address: "Serrkunda London Corner",
        phone: "7755473",
      },
    ];

    return await Customer.create(customers);
  }
}
