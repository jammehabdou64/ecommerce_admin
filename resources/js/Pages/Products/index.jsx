import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { deleteApi, getApi } from "~/Api";
import Table from "~/Components/Table";
import Layout from "~/Components/Layout";
import PageHeader from "~/Components/PageHeader";
import AppContainer from "~/Components/AppContainer";
import AppButton from "~/Components/AppButton";
import AppModal from "~/Components/AppModal";
import { useModal } from "~/Reducers/modalReducer";

import CreateProductForm from "./Create";
import EditProductForm from "./Edit";

const Products = () => {
  const headers = [
    "index",
    "image",
    "name",
    "category",
    "quantity",
    "balance",
    "price",
    "description",
    "date",
    "action",
  ];
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { state, dispatch } = useModal();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getApi("/products");
        setLoading(false);
        if (data.success) {
          console.log(data.message.data);
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

  const showEditProduct = (event, product) => {
    event.preventDefault();
    setCurrentProduct(product);
    console.log(product);
    dispatch({ type: "openEditModal" });
    return;
  };

  return (
    <Layout>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <AppContainer>
          <AppModal openModal={state.isModalOpen}>
            <CreateProductForm click={() => dispatch({ type: "closeModal" })} />
          </AppModal>

          <AppModal openModal={state.isEditModalOpen}>
            <EditProductForm
              data={currentProduct}
              click={() => dispatch({ type: "closeEditModal" })}
            />
          </AppModal>
          <PageHeader title={"Products Page"} />
          <div>
            <div className="flex justify-between py-1 items-center">
              <h4 className="text-2xl font-medium text-gray-600">
                Products Table
              </h4>
              <AppButton
                title={"New Product"}
                click={() => dispatch({ type: "openModal" })}
              />
            </div>
          </div>
          <Table columns={headers}>
            {/* <TableHeader headers={headers} /> */}
            <tbody className="bg-white divide-y divide-gray-200">
              {products?.data.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {index + 1}
                  </td>

                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    <img
                      src={product?.image}
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
                    {product.quantity}
                  </td>

                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {product.balance}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {product.price}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {product.description}
                  </td>

                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {product.created_at}
                  </td>

                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    <div className="flex ">
                      <Link to="#" onClick={(e) => showEditProduct(e, product)}>
                        <PencilIcon
                          className="text-blue-500 w-6 cursor-pointer mx-3"
                          title="edit"
                        />
                      </Link>
                      <TrashIcon
                        className="text-red-500 w-6 cursor-pointer mx-3"
                        onClick={() => deleteProduct(product.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </AppContainer>
      )}
    </Layout>
  );
};

export default Products;
