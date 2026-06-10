import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";
import API_BASE_URL from "../config/api";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

function AdminUsers() {

  const [editingUser, setEditingUser] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    email: "",
  });
  
  const [users, setUsers] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  useEffect(() => {

    fetchUsers();

  }, []);

  const fetchUsers = async () => {

    try {

      const response =
        await axios.get(
          `${API_BASE_URL}/api/auth/users`
        );

      setUsers(
        response.data
      );

    }

    catch (error) {

      console.log(error);

    }

  };
const editUser = async (user) => {

  const newName = window.prompt(
    "Enter New Name",
    user.name
  );

  if (!newName) return;

  try {

    await axios.put(
      `${API_BASE_URL}/api/auth/users/${user._id}`,
      {
        name: newName
      }
    );

    fetchUsers();

    alert("User Updated ✅");

  } catch (error) {

    console.log(error);

  }

};
  const deleteUser = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this user?"
      );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `${API_BASE_URL}/api/auth/users/${id}`
      );

      fetchUsers();

    }

    catch (error) {

      console.log(error);

    }

  };
const startEdit = (user) => {

  setEditingUser(user._id);

  setEditData({
    name: user.name,
    email: user.email,
  });

};
const saveUser = async (id) => {

  try {

    await axios.put(
      `${API_BASE_URL}/api/auth/users/${id}`,
      editData
    );

    setEditingUser(null);

    fetchUsers();

    alert("User Updated ✅");

  } catch (error) {

    console.log(error);

  }

};

  const filteredUsers =
    users.filter(

      (user) =>

        user.name
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

        ||

        user.email
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

    );

  return (

    <div className="flex">

      <AdminSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-1">

        <AdminNavbar
          toggleSidebar={() =>
            setSidebarOpen(
              !sidebarOpen
            )
          }
        />

        <div className="min-h-screen bg-[#f8f5ef] p-8 pt-28">

          <div className="max-w-7xl mx-auto">

            <h1 className="text-5xl font-serif mb-8">
              Users
            </h1>

            <div className="bg-white p-6 rounded-2xl shadow mb-8">

              <input
                type="text"
                placeholder="Search User..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
                className="
                w-full
                border
                p-3
                rounded-xl
                "
              />

            </div>

            <div className="bg-white rounded-3xl shadow overflow-hidden">

              <table className="w-full">

                <thead>

                  <tr className="bg-[#faf6ed]">

                    <th className="p-5 text-left">
                      Name
                    </th>

                    <th className="p-5 text-left">
                      Email
                    </th>

                    <th className="p-5 text-left">
                      Role
                    </th>

                    <th className="p-5 text-center">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredUsers.map(

                    (user) => (

                      <tr
                        key={user._id}
                        className="
                        border-b
                        "
                      >

                    <td className="p-5">

  {editingUser === user._id ? (

    <input
      value={editData.name}
      onChange={(e) =>
        setEditData({
          ...editData,
          name: e.target.value,
        })
      }
      className="border p-2 rounded"
    />

  ) : (
    user.name
  )}

</td>
                     <td className="p-5">

  {editingUser === user._id ? (

    <input
      value={editData.email}
      onChange={(e) =>
        setEditData({
          ...editData,
          email: e.target.value,
        })
      }
      className="border p-2 rounded"
    />

  ) : (
    user.email
  )}

</td>

                        <td className="p-5">
                          {user.role ||
                            "User"}
                        </td>

                        {/* <td className="p-5 text-center">

                          <button
                            onClick={() =>
                              deleteUser(
                                user._id
                              )
                            }
                            className="
                            px-4
                            py-2
                            bg-red-500
                            text-white
                            rounded-lg
                            "
                          >
                            Delete
                          </button>

                        </td> */}
<td className="p-5 text-center">

  {editingUser === user._id ? (

    <div className="flex justify-center gap-2">

      <button
        onClick={() => saveUser(user._id)}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Save
      </button>

      <button
        onClick={() => setEditingUser(null)}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg"
      >
        Cancel
      </button>

    </div>

  ) : (

    <div className="flex justify-center gap-2">

      <button
        onClick={() => startEdit(user)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Edit
      </button>

      <button
        onClick={() => deleteUser(user._id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Delete
      </button>

    </div>

  )}

</td>
                      </tr>

                    )

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminUsers;