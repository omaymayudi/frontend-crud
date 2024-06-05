import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  // console.log("ini data product: ", users);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:5000/api/v1/users/${userId}`)
      .then(() => {
        getUsers();
      });
  };
  return (
    <div className="relative overflow-x-auto px-4 py-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.uuid}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4 space-x-2">
                <Link to={`/user/edit/${user.uuid}`} className="">
                  <button className="font-medium bg-green-600 text-white rounded-lg px-4 py-2 shadow-lg hover:underline">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="font-medium bg-red-600 text-white rounded-lg px-4 py-2 shadow-lg hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
