import axios from "axios";

const signupapi = async ({ user, pass, mail, setIsSliding}) => {
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
    if (response.status === 201) {
      setIsSliding(false);
      alert('Successfully registered... Please Login in...');
    } else {
      alert('registered failed due to server issue...🥵');
    }
  } catch (error) {
    console.error('Error during registration:', error);
  }
};

export default signupapi;
