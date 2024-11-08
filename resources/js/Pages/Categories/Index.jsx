import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "~/Components/Table";
import { deleteApi, getApi } from "~/Api";
import Layout from "~/Components/Layout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const Categories = () => {
  const headers = ["index", "name", "description", "date", "action"];
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getApi("/categories");
        setLoading(false);
        if (data.success) {
          return setCategory(data.message);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const deleteCategory = async (id) => {
    try {
      const { data } = await deleteApi(`/categories/${id}`);
      if (data.success) {
        const data = categories.filter((category) => category._id !== id);
        return setCategory(data);
      }
    } catch (error) {}
  };

  return (
    <Layout>
      {loading ? (
        // <Spinner />
        <h1>Loading...</h1>
      ) : (
        <Table columns={headers}>
          {/* <TableHeader headers={headers} /> */}
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category, index) => (
              <tr key={index}>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {index + 1}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {category.name}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {category.description}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {category.createdAt}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  <div className="flex ">
                    <Link to={"/categories/edit/" + category._id}>
                      <PencilIcon
                        className="text-blue-500 w-6 cursor-pointer mx-3"
                        title="edit"
                      />
                    </Link>
                    <TrashIcon
                      className="text-red-500 w-6 cursor-pointer mx-3"
                      onClick={() => deleteCategory(category._id)}
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

export default Categories;
