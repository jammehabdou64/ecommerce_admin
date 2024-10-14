import React from "react";
import Layout from "~/Components/Layout";
import {
  ExclamationCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import DashboardCard from "~/Components/DashboardCard";
import TableHeader from "~/Components/TableHeader";
import Table from "~/Components/Table";
// import SaleChart from "~/Components/SaleChart";

const Dashboard = () => {
  const items = [
    {
      title: "Customers",
      total: 55,
      Icon: UsersIcon,
    },
    {
      title: "Products",
      total: 155,
      Icon: ShoppingCartIcon,
    },
    {
      title: "Orders",
      total: 15,
      Icon: ShoppingBagIcon,
    },
    {
      title: "Low Items",
      total: 10,
      Icon: ExclamationCircleIcon,
    },
  ];
  const headers = ["index", "image", "name", "price"];

  return (
    <Layout>
      <div className="px-8 mt-8">
        <div className="dashboard-cards grid grid-cols-4 gap-5 mt-4 ">
          {items.map(({ title, total, Icon }, index) => (
            <DashboardCard
              key={index}
              title={title}
              Icon={Icon}
              total={total}
            />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2">
          <div className="sales-chart col-span-3">{/* <SaleChart /> */}</div>
          <div className="active-customers col-span-2">
            <Table data={["index", "name", "email"]}>
              {/* <TableHeader headers={} /> */}
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lamin Jammeh</td>
                  <td>lamin@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="top-selling-product">
          <Table title={"Top Selling produts"} data={[]}>
            <tbody></tbody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
