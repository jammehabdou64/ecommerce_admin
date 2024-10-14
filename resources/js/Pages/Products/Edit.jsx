import React, { useEffect, useState } from "react";
import Layout from "~/Components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { getApi, patchtApi, postApi } from "~/Api";

const EditProduct = () => {
  const [categories, setCategory] = useState([]);
  const [brands, setBrand] = useState([]);

  const { id } = useParams();
  const [userFormData, SetUserFormData] = useState({
    category: "",
    brand: "",
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
        const [categories, brands, products] = await Promise.all([
          getApi("/categories"),
          getApi("/brands"),
          getApi(`/products/${id}`),
        ]);
        setCategory(categories.data?.message || []);
        setBrand(brands?.data?.message);
        const { data } = products;
        if (data.success) {
          const { message } = data;
          return SetUserFormData({
            ...userFormData,
            category: message?.category?._id,
            brand: message?.brand?._id,
            name: message?.name,
            quantity: message?.quantity,
            price: message?.price,
            threshold: message?.threshold,
            description: message?.description,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getItems();
  }, []);

  let navigate = useNavigate();
  const [disable, setDisalbe] = useState(false);
  const inputChange = (e) =>
    SetUserFormData({ ...userFormData, [e.target.name]: e.target.value });

  const imageChange = (e) =>
    SetUserFormData({ ...userFormData, image: e.target.files[0] });

  const submit = async (e) => {
    try {
      e.preventDefault();
      setDisalbe(true);
      const jsFormData = new FormData();
      jsFormData.append("name", userFormData.name);
      jsFormData.append("category", userFormData.category);
      jsFormData.append("brand", userFormData.brand);
      jsFormData.append("quantity", userFormData.quantity);
      jsFormData.append("price", userFormData.price);
      jsFormData.append("threshold", userFormData.threshold);
      jsFormData.append("image", userFormData.image);
      jsFormData.append("description", userFormData.description);
      const { data } = await patchtApi(`/products/${id}`, jsFormData);

      if (data.success) {
        setDisalbe(false);
        return navigate("/products");
      }
    } catch (error) {
      setDisalbe(false);
    }
  };
  return (
    <Layout>
      <div className="flex items-center h-full mt-8">
        <form
          onSubmit={(e) => submit(e)}
          className="px-12 py-14 flex flex-col w-full md:w-11/12 lg:max-w-2xl  mx-auto mb-4 bg-white"
        >
          <div className="form-header ">
            <h3 className="font-semibold text-xl">Add Product</h3>
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
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-6 mt-2">
              <label htmlFor="brand" className="text-sm">
                Brand
              </label>
              <select
                name="brand"
                id="brand"
                className="mt-1 block w-full max-w-full py-2 px-3  border bg-white
                  border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
                value={userFormData.brand}
                onChange={(e) => inputChange(e)}
              >
                <option value={""} className="text-gray-400">
                  select brand
                </option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand._id}>
                    {brand.name}
                  </option>
                ))}
              </select>
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
   border-gray-300 rounded-md ocus:outline-none focus:ring-gray-100 focus:border-gray-300 sm:text-sm"
                />
              </div>
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

export default EditProduct;
