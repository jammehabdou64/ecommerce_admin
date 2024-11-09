import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "~/Components/Table";
import { deleteApi, getApi } from "~/Api";
import Layout from "~/Components/Layout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import AppContainer from "~/Components/AppContainer";
import PageHeader from "~/Components/PageHeader";
import AppButton from "~/Components/AppButton";
import AppModal from "~/Components/AppModal";
import CreateCustomer from "./Create";
import EditCustomer from "./Edit";

const Customers = () => {
  const headers = [
    "index",
    "name",
    "email",
    "address",
    "phone",
    "date",
    "action",
  ];
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const { data } = await getApi("/customers");
        setLoading(false);
        if (data.success) {
          // return console.log(data?.message);
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

  const showEditCustomer = (event, customer) => {
    event.preventDefault();
    setCurrentCustomer(customer);
    setOpenEditModal(true);
    return;
  };

  return (
    <Layout>
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        <AppContainer>
          <AppModal openModal={openModal}>
            <CreateCustomer click={() => setOpenModal(!openModal)} />
          </AppModal>

          <AppModal openModal={openEditModal}>
            <EditCustomer
              data={currentCustomer}
              click={() => setOpenEditModal(false)}
            />
          </AppModal>
          <PageHeader title={"Customer Page"} />
          <div>
            <div className="flex justify-between py-1 items-center">
              <h4 className="text-2xl font-medium text-gray-600">
                Customers Table
              </h4>
              <AppButton
                title={"New Customer"}
                click={() => setOpenModal(!openModal)}
              />
            </div>
          </div>
          <Table columns={headers}>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers?.data.map((customer, index) => (
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
                    {customer.address}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {customer.phone}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {customer.created_at}
                  </td>

                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    <div className="flex ">
                      <Link
                        to="#"
                        onClick={(e) => showEditCustomer(e, customer)}
                      >
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
        </AppContainer>
      )}
    </Layout>
  );
};

export default Customers;
