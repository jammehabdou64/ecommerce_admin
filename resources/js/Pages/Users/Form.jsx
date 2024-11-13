import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { patchApi, postApi } from "~/Api";
import AppCloseButton from "~/Components/AppCloseButton";
import { useModal } from "~/Reducers/modalReducer";
import { useAlert } from "../../Reducers/AlertReducer";

const Form = ({ data = null, formUrl, method = "post" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
    primary_phone: "",
    secondary_phone: "",
  });

  useEffect(() => {
    return setFormData({
      name: data?.name || "",
      email: data?.email || "",
      role: data?.role || "",
      status: data?.status || "",
      primary_phone: data?.primary_phone || "",
      secondary_phone: data?.secondary_phone || "",
    });
  }, [data]);

  const [disable, setDisalbe] = useState(false);
  const [formError, setFormError] = useState(null);
  const { dispatch } = useModal();
  const alert = useAlert();
  let navigate = useNavigate();

  const inputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submit = async (e) => {
    try {
      e.preventDefault();
      setDisalbe(true);

      const { data } =
        method === "post"
          ? await postApi(formUrl, formData)
          : await patchApi(formUrl, formData);
      if (data.success) {
        setDisalbe(false);
        dispatch({ type: method === "post" ? "closeModal" : "closeEditModal" });
        console.log(data.message);
        alert.dispatch({ type: "show_alert", payload: data.message });
        navigate("/users");
      }
    } catch (error) {
      const erros = error.response?.data?.errors || [];
      setFormError(erros[0]);
      setDisalbe(false);
    }
  };
  // childNodes
  return (
    <div className="w-full" id="form">
      <div className="flex w-full items-center h-full">
        <form
          onSubmit={(e) => submit(e)}
          className="px-12 py-8 flex flex-col w-full md:w-11/12 lg:max-w-2xl  mx-auto mb-4 bg-white"
        >
          <div className="form-header flex justify-between">
            <h3 className="font-medium text-gray-800 text-2xl">
              {method === "post" ? "New User" : "Edit User"}
            </h3>
            <AppCloseButton
              click={() =>
                dispatch({
                  type: method === "post" ? "closeModal" : "closeEditModal",
                })
              }
            />
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
              <small
                className={`${formError?.name ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.name}
              </small>
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
              <small
                className={`${formError?.email ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.email}
              </small>
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
              <small
                className={`${formError?.role ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.role}
              </small>
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
              <small
                className={`${formError?.primary_phone ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.primary_phone}
              </small>
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
    </div>
  );
};

export default Form;
