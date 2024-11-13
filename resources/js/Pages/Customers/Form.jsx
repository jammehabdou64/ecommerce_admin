import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { patchApi, postApi } from "~/Api";
import AppCloseButton from "~/Components/AppCloseButton";
import { useModal } from "../../Reducers/modalReducer";
import { useAlert } from "../../Reducers/AlertReducer";

const Form = ({ data = null, method = "post", formUrl }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [formError, setFormError] = useState(null);
  const [disable, setDisalbe] = useState(false);
  let navigate = useNavigate();
  const { dispatch } = useModal();
  const alert = useAlert();

  useEffect(() => {
    return setFormData({
      ...formData,
      name: data?.name || "",
      email: data?.email || "",
      address: data?.address || "",
      phone: data?.phone || "",
    });
  }, [data]);

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
        dispatch({ type: method === "post" ? "closeModal" : "closeEditModal" });
        setDisalbe(false);
        alert.dispatch({ type: "show_alert", payload: data.message });
        navigate("/customers");
      }
    } catch (error) {
      const erros = error.response?.data?.errors || [];
      setFormError(erros[0]);
      setDisalbe(false);
    }
  };
  return (
    <div className="w-full">
      <div className="flex items-center h-full">
        <form
          onSubmit={(e) => submit(e)}
          className="px-12 py-8 flex flex-col w-full md:w-11/12 lg:max-w-2xl  mx-auto mb-4 bg-white"
        >
          <div className="form-header flex justify-between">
            <h3 className="font-medium text-gray-800 text-2xl">
              {method === "post" ? "New Customer" : "Edit Customer"}
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
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
              <small
                className={`${formError?.name ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.name}
              </small>
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={formData.email}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
              <small
                className={`${formError?.email ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.email}
              </small>
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="phone" className="text-sm">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
              <small
                className={`${formError?.phone ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.phone}
              </small>
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
              <small
                className={`${formError?.address ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.address}
              </small>
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
