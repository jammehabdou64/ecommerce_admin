import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "~/Components/Table";
import { deleteApi, getApi } from "~/Api";
import Layout from "~/Components/Layout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import AppContainer from "~/Components/AppContainer";

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

  return (
    <Layout>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <AppContainer>
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
                      <Link to={"/users/edit/" + user.id}>
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
