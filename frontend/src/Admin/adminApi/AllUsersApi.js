import axios from "axios";
import { useState, useEffect } from "react";

const AllUsersApi = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5100/admin/allUsers");
        setAllUsers(response.data);
      } catch (err) {
        console.log("Error in fetching all users:", err);
      }
    };

    fetchAllUsers();
  }, []);
  return allUsers;
};

export default AllUsersApi;
