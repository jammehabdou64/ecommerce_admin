import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "~/Components/Table";
import { deleteApi, getApi } from "~/Api";
import Layout from "~/Components/Layout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import AppContainer from "~/Components/AppContainer";
import PageHeader from "~/Components/PageHeader";
import AppButton from "~/Components/AppButton";
import AppModal from "~/Components/AppModal";
import CreateUser from "./Create";
import EditUser from "./Edit";
import { useModal } from "~/Reducers/modalReducer";

const Users = () => {
  const headers = [
    "index",
    "name",
    "email",
    "primary phone",
    "secondary phone",
    "role",
    "date",
    "action",
  ];
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { state, dispatch } = useModal();

  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await getApi("/users");
        setLoading(false);
        if (data.success) {
          return setUsers(data.message);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const { data } = await deleteApi(`/users/${id}`);
      if (data.success) {
        const data = users.filter((brand) => brand._id !== id);
        return setUsers(data);
      }
    } catch (error) {}
  };

  const showEditUser = (event, user) => {
    event.preventDefault();
    setCurrentUser(user);
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
            <CreateUser />
          </AppModal>

          <AppModal openModal={state.isEditModalOpen}>
            <EditUser data={currentUser} />
          </AppModal>

          <PageHeader title={"Users Page"} />
          <div>
            <div className="flex justify-between py-1 items-center">
              <h4 className="text-2xl font-medium text-gray-600">
                Users Table
              </h4>
              <AppButton
                title={"New User"}
                click={() => dispatch({ type: "openModal" })}
              />
            </div>
          </div>
          <Table columns={headers}>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.data.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {index + 1}
                  </td>

                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {user.name}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {user.email}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {user.primary_phone}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {user.secondary_phone}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {user.role}
                  </td>
                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    {user.created_at}
                  </td>

                  <td className="px-6 py-2 mr-2 text-sm leading-5 border">
                    <div className="flex ">
                      <Link to="#" onClick={(e) => showEditUser(e, user)}>
                        <PencilIcon
                          className="text-blue-500 w-6 cursor-pointer mx-3"
                          title="edit"
                        />
                      </Link>
                      <TrashIcon
                        className="text-red-500 w-6 cursor-pointer mx-3"
                        onClick={() => deleteUser(user.id)}
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

export default Users;
