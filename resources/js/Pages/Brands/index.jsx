import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "~/Components/Table";
import TableHeader from "~/Components/TableHeader";
// import Spinner from "~/Components/Spinner";
import { deleteApi, getApi } from "~/Api";
import Layout from "~/Components/Layout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const Brands = () => {
  const headers = ["index", "name", "description", "date", "action"];
  const [brands, setBrand] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const { data } = await getApi("/admin/brands");
        setLoading(false);
        if (data.success) {
          return setBrand(data.message);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getBrands();
  }, []);

  const deleteBrand = async (id) => {
    try {
      const { data } = await deleteApi(`/admin/brands/${id}`);
      if (data.success) {
        const data = brands.filter((brand) => brand._id !== id);
        return setBrand(data);
      }
    } catch (error) {}
  };

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <Table
          title={"Brands"}
          buttonName={"add brand"}
          pathTo={"/admin/brands/create"}
          data={headers}
        >
          {/* <TableHeader headers={headers} /> */}
          <tbody className="bg-white divide-y divide-gray-200">
            {brands.map((brand, index) => (
              <tr key={index}>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {index + 1}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {brand.name}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {brand.description}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {brand.createdAt}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  <div className="flex ">
                    <Link to={"/admin/brands/edit/" + brand._id}>
                      <PencilIcon
                        className="text-blue-500 w-6 cursor-pointer mx-3"
                        title="edit"
                      />
                    </Link>
                    <TrashIcon
                      className="text-red-500 w-6 cursor-pointer mx-3"
                      onClick={() => deleteBrand(brand._id)}
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

export default Brands;
