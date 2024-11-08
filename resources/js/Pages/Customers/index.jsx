import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "~/Components/Table";
// import Spinner from "~/Components/Spinner";
import { deleteApi, getApi } from "~/Api";
import Layout from "~/Components/Layout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const Customers = () => {
  const headers = [
    "index",
    "name",
    "email",
    "role",
    "description",
    "date",
    "action",
  ];
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const { data } = await getApi("/customers");
        setLoading(false);
        if (data.success) {
          return setCustomers(data.message);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getCustomers();
  }, []);

  const deleteCustomer = async (id) => {
    try {
      const { data } = await deleteApi(`/customers/${id}`);
      if (data.success) {
        const data = customers.filter((brand) => brand._id !== id);
        return setCustomers(data);
      }
    } catch (error) {}
  };

  return (
    <Layout>
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        <Table columns={headers}>
          {/* <Table headers={headers} /> */}
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer, index) => (
              <tr key={index}>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {index + 1}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {customer.name}
                </td>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {customer.email}
                </td>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {customer.role}
                </td>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {customer.description}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {customer.createdAt}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  <div className="flex ">
                    <Link to={"/customers/edit/" + customer._id}>
                      <PencilIcon
                        className="text-blue-500 w-6 cursor-pointer mx-3"
                        title="edit"
                      />
                    </Link>
                    <TrashIcon
                      className="text-red-500 w-6 cursor-pointer mx-3"
                      onClick={() => deleteCustomer(customer._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Layout>
  );
};

export default Customers;
