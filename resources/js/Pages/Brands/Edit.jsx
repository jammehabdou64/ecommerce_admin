import React, { useEffect, useState } from "react";
import { getApi, patchApi } from "~/Api";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "~/Components/Layout";

const EditBrand = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const getBrand = async () => {
      try {
        const { data } = await getApi(`/admin/brands/${id}`);
        if (data.success) {
          const { message } = data;
          return setFormData({
            ...formData,
            name: message.name ? message.name : "",
            description: message.description ? message.description : "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    getBrand();
  }, [id]);

  const [loading, setLoading] = useState(true);

  const [disable, setDisalbe] = useState(false);
  let navigate = useNavigate();

  const inputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submit = async (e) => {
    try {
      e.preventDefault();
      setDisalbe(true);
      const { data } = await patchApi(`/admin/brands/${id}`, formData);
      setLoading(false);
      if (data.success) {
        setDisalbe(false);
        return navigate("/admin/brands");
      }
    } catch (error) {
      setLoading(false);

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
            <h3 className="font-semibold text-xl">Edit Brand</h3>
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

export default EditBrand;
