import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "~/Reducers/AlertReducer";
import { useModal } from "~/Reducers/modalReducer";
import AppCloseButton from "~/Components/AppCloseButton";
import { getApi, postApi, patchApi } from "~/Api";

const Form = ({ data = null, formUrl, method = "post" }) => {
  const [categories, setCategory] = useState([]);
  const { dispatch } = useModal();
  const [formError, setFormError] = useState(null);

  const alert = useAlert();

  const [userFormData, SetUserFormData] = useState({
    category: "",
    name: "",
    image: "",
    threshold: "",
    quantity: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    const getItems = async () => {
      try {
        const { data } = await getApi("/categories");
        setCategory(data?.message?.data || []);
        //   setBrand(brands?.data?.message);
      } catch (error) {}
    };
    SetUserFormData({
      ...userFormData,
      category: data?.category?.id || "",
      name: data?.name || "",
      quantity: data?.quantity || "",
      price: data?.price || "",
      threshold: data?.threshold || "",
      description: data?.description || "",
    });
    getItems();
  }, [data]);

  let navigate = useNavigate();
  const [disable, setDisalbe] = useState(false);
  const inputChange = (e) =>
    SetUserFormData({ ...userFormData, [e.target.name]: e.target.value });

  const imageChange = (e) =>
    SetUserFormData({ ...userFormData, image: e.target.files[0] });

  //   SetUserFormData({ ...userFormData, image: imageList });

  const submit = async (e) => {
    try {
      e.preventDefault();
      setDisalbe(true);
      const jsFormData = new FormData();
      jsFormData.append("name", userFormData.name);
      jsFormData.append("category_id", userFormData.category);
      jsFormData.append("quantity", userFormData.quantity);
      jsFormData.append("price", userFormData.price);
      jsFormData.append("threshold", userFormData.threshold);
      jsFormData.append("image", userFormData.image);
      jsFormData.append("description", userFormData.description);

      const { data } =
        method === "post"
          ? await postApi(formUrl, jsFormData)
          : await patchApi(formUrl, jsFormData);
      if (data.success) {
        dispatch({ type: method === "post" ? "closeModal" : "closeEditModal" });
        setDisalbe(false);
        alert.dispatch({ type: "show_alert", payload: data.message });
        navigate("/products");
      }
    } catch (error) {
      const erros = error.response?.data?.errors || [];
      setFormError(erros[0]);
      setDisalbe(false);
    }
  };
  return (
    <div className="w-full" id="form">
      <div className="flex items-center h-full mt-8">
        <form
          onSubmit={(e) => submit(e)}
          className="px-12 py-14 flex flex-col w-full md:w-11/12 lg:max-w-2xl  mx-auto mb-4 bg-white"
        >
          <div className="form-header flex justify-between">
            <h3 className="font-medium text-gray-800 text-2xl">
              {method === "post" ? "New " : "Edit "} Product
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
                value={userFormData.name}
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
              <label htmlFor="category" className="text-sm">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="mt-1 block w-full max-w-full py-2 px-3  border bg-white
                      border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
                value={userFormData.category}
                onChange={(e) => inputChange(e)}
              >
                <option value={""} className="text-gray-400">
                  select category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <small
                className={`${formError?.category_id ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.category_id}
              </small>
            </div>

            <div className="md:col-span-6 mt-2">
              <label htmlFor="Category" className="text-sm">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                value={userFormData.quantity}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
       border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
              <small
                className={`${formError?.quantity ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.quantity}
              </small>
            </div>

            <div className="md:col-span-6 mt-2">
              <label htmlFor="Category" className="text-sm">
                Price
              </label>
              <input
                type="text"
                name="price"
                value={userFormData.price}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
       border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
              <small
                className={`${formError?.price ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.price}
              </small>
            </div>

            <div className="md:col-span-6 mt-2">
              <label htmlFor="Category" className="text-sm">
                Threshold
              </label>
              <input
                type="text"
                name="threshold"
                value={userFormData.threshold}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
       border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
              <small
                className={`${formError?.threshold ? "inline-block" : "hidden"} text-red-500 text-sm`}
              >
                {formError?.threshold}
              </small>
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="image" className="text-sm">
                Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => imageChange(e)}
                className="mt-1 block w-full py-2 px-3  border
           border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
              />
            </div>
            <div className="md:col-span-6 mt-2">
              <label htmlFor="Category" className="text-sm">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={userFormData.description}
                onChange={(e) => inputChange(e)}
                className="mt-1 block w-full py-2 px-3  border
                  </div>
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
