import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [id, setId] = useState("");

  const editData = (user_id) => {
    setId(user_id);
    // console.log(user_id);
    setModalEdit(true);
  };
  const addData = () => {
    setModalAdd(true);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  return (
    <div className="flex items-center justify-center mt-32">
      <div className="container">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded "
          onClick={addData}
        >
          Add Data
        </button>

        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            {users.map((value, index) => {
              return (
                <tr
                  key={index}
                  className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                >
                  <th className="p-3 text-left">No</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Gender</th>
                  <th className="p-3 text-center" width="160px">
                    Actions
                  </th>
                </tr>
              );
            })}
          </thead>
          <tbody className="flex-1 flex-col sm:flex-none ">
            {users.map((user, index) => (
              <tr
                key={index}
                className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
              >
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {index + 1}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {user.name}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  {user.email}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  {user.gender}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded "
                    onClick={() => editData(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-4"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalAdd && <ModalAdd setModalAdd={setModalAdd} getUsers={getUsers} />}
      {modalEdit && (
        <ModalEdit setModalEdit={setModalEdit} id={id} getUsers={getUsers} />
      )}
    </div>
  );
};

export default UserList;
