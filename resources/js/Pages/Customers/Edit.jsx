import React, { useEffect, useState } from "react";
import Layout from "~/Components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { getApi, patchApi } from "~/Api";

const EditCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const { data } = await getApi(`/admin/customers/${id}`);
        if (data.success) {
          const { message } = data;
          return setFormData({
            ...formData,
            name: message?.name || "",
            email: message?.email || "",
            role: message?.role || "",
            status: message?.status || "",
            description: message?.description || "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCustomer();
  }, []);

  const [disable, setDisalbe] = useState(false);
  let navigate = useNavigate();

  const inputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submit = async (e) => {
    try {
      e.preventDefault();
      setDisalbe(true);
      const { data } = await patchApi(`/admin/customers/${id}`, formData);
      if (data.success) {
        setDisalbe(false);
        return navigate("/admin/customers");
      }
    } catch (error) {
      setDisalbe(false);
    }
  };
  return (
    <Layout>
      <div className="flex items-center h-full">
        <form
          onSubmit={(e) => submit(e)}
          className="px-12 py-14 flex flex-col w-full md:w-11/12 lg:max-w-2xl  mx-auto mb-4 bg-white"
        >
          <div className="form-header ">
            <h3 className="font-semibold text-xl">Edit Customer</h3>
          </div>
          <div className="grid gap-4 gap-y-2 md:grid-cols-5">
            <div className="md:col-span-6 mt-2">
              <label htmlFor="Category" className="text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="Category" className="text-sm">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
            </div>

            <div className="md:col-span-6 mt-2">
              <label htmlFor="status" className="text-sm">
                Status
              </label>
              <select
                name="status"
                id="status"
                className="mt-1 block w-full max-w-full py-2 px-3  border bg-white
                  border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
                value={formData.status}
                onChange={(e) => inputChange(e)}
              >
                <option value={""} className="text-gray-400">
                  select a status
                </option>

                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="Category" className="text-sm">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-2 md:col-span-6 gap-5">
              <div className="mt-2 w-full">
                <button
                  type="reset"
                  className="mt-1  block text-white w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-100 focus:border-gray-300
sm:text-sm bg-red-900"
                >
                  reset
                </button>
              </div>

              <div className="mt-2 ">
                <button
                  type="submit"
                  className="mt-1 w-full block text-white   py-3 px-4 border
border-gray-300  rounded-md focus:outline-none focus:ring-gray-100 focus:border-gray-300
sm:text-sm"
                  style={{ backgroundColor: "#1e2c4c" }}
                  disabled={disable}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditCustomer;
