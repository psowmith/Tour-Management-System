import axios from "axios";
const createUserApi = async (user,pass,mail) => {
    const data = {
        username: user,
        email: mail,
        password: pass,
    };
    try {
        const response = await axios.post('http://localhost:5100/register', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          alert('Successfully posted...');
        } else {
          alert('failed to post the user...');
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
}

export default createUserApi
