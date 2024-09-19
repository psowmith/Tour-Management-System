import axios from "axios";

const updateUserApi = async (orgemail,email,username) => {
    try {
        const response = await axios.put("http://localhost:5100/admin/updateUser",{ originalemail: orgemail, email: email, username: username });
        if (response.ok) {
            console.log("Updated...😊");
        } else {
            console.log("User update failed 🥵");
        }
    } catch (err) {
        console.log("Error occurred for user update...", err);
    }
}

export default updateUserApi;
