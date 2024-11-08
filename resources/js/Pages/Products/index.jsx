import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "~/Components/Table";
// import Spinner from "~/Components/Spinner";
import { deleteApi, getApi } from "~/Api";
import Layout from "~/Components/Layout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const Products = () => {
  const headers = [
    "index",
    "image",
    "name",
    "category",
    "brand",
    "quantity",
    "balance",
    "price",
    // "rating",
    "date",
    "action",
  ];
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getApi("/products");
        setLoading(false);
        if (data.success) {
          return setProduct(data.message);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const { data } = await deleteApi(`/products/${id}`);
      if (data.success) {
        const data = products.filter((product) => product._id !== id);
        return setProduct(data);
      }
    } catch (error) {}
  };
  return (
    <Layout>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <Table columns={headers}>
          {/* <TableHeader headers={headers} /> */}
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {index + 1}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  <img
                    src={`/images/product-images/${product?.image}`}
                    alt={product.name}
                    className="w-9"
                  />
                </td>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {product.name}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {product.category?.name}
                </td>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {product.brand?.name}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {product.quantity}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {product.balance}
                </td>
                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {product.price}
                </td>
                {/* <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {product.description}
                </td> */}

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  {product.createdAt}
                </td>

                <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                  <div className="flex ">
                    <Link to={"/products/edit/" + product._id}>
                      <PencilIcon
                        className="text-blue-500 w-6 cursor-pointer mx-3"
                        title="edit"
                      />
                    </Link>
                    <TrashIcon
                      className="text-red-500 w-6 cursor-pointer mx-3"
                      onClick={() => deleteProduct(product._id)}
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

export default Products;
