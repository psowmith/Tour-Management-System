import axios from "axios";
import { useState, useEffect } from "react";

const useNewUserApi = () => {
    const [newUser, setNewUser] = useState({username:" null "});

    useEffect(() => {
        const fetchNewUser = async () => {
            try {
                const response = await axios.get("http://localhost:5100/admin/newUser");
                setNewUser(response.data);
            } catch (err) {
                console.log("error in new User API...", err);
            }
        };
        fetchNewUser();
    }, []);
    return newUser;
};

export default useNewUserApi;
