import React from 'react';
import { Link } from "react-router-dom";
import AllUsersApi from '../../adminApi/AllUsersApi';
import './UserList.css';
const UserList = () => {
  const allUsers = AllUsersApi();
  const handleDelete = (id) => {
    console.log(`Delete user with ID: ${id}`);
  };
  return (
    <div className="userList">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/admin/user/${user._id}`} >
                  <button className="userListEdit">Edit</button>
                </Link>
                <h1 className="userListDelete"
                    onClick={() => handleDelete(user._id)} style={{color:"red"}}>
                      Delete
                </h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
