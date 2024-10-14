import React, { useEffect, useState } from "react";
import Layout from "~/Components/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getApi, patchtApi, postApi } from "~/Api";

const EditUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
    primary_phone: "",
    secondary_phone: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getApi(`/users/${id}`);
        if (data.success) {
          const { message } = data;
          return setFormData({
            ...formData,
            name: message?.name || "",
            email: message?.email || "",
            role: message?.role || "",
            primary_phone: message?.primary_phone || "",
            secondary_phone: message?.secondary_phone || "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  const [disable, setDisalbe] = useState(false);
  let navigate = useNavigate();

  const inputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submit = async (e) => {
    try {
      e.preventDefault();
      setDisalbe(true);
      const { data } = await patchtApi(`/users/${id}`, formData);
      if (data.success) {
        setDisalbe(false);
        return navigate("/users");
      }
    } catch (error) {
      setDisalbe(false);
    }
  };
  return (
    <Layout>
      <div className="py-8 flex justify-end">
        <Link
          className="bg-gray-900 inline-flex items-center h-9 px-5 text-small text-indigo-100 transition-colors duration-150 rounded-lg focus:shadow-outline"
          to={"/users"}
        >
          Back
        </Link>
      </div>
      <div className="flex items-center h-full">
        <form
          onSubmit={(e) => submit(e)}
          className="px-12 py-14 flex flex-col w-full md:w-11/12 lg:max-w-2xl  mx-auto mb-4 bg-white"
        >
          <div className="form-header ">
            <h3 className="font-semibold text-xl">Edit User</h3>
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
                className="mt-1 block w-full p-3  border
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
                className="mt-1 block w-full p-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="role" className="text-sm">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="mt-1 block w-full max-w-full p-3  border bg-white
                  border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
                value={formData.role}
                onChange={(e) => inputChange(e)}
              >
                <option value={""} className="text-gray-400">
                  select a role
                </option>

                <option value="2">user</option>
                <option value="4">supervisor</option>
                <option value="6">admin</option>
              </select>
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="primary-phone" className="text-sm">
                Primary Phone
              </label>
              <input
                type="text"
                name="primary_phone"
                id="primary-phone"
                value={formData.primary_phone}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full p-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
            </div>

            <div className="md:col-span-6 mt-2">
              <label htmlFor="secondary-phone" className="text-sm">
                Secondary Phone
              </label>
              <input
                id="secondary-phone"
                type="text"
                name="secondary_phone"
                value={formData.secondary_phone}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full p-3  border
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

export default EditUser;
