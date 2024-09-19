const signinapi = async({u1,p2,setloginfail,setloginfaildetail,setsuccesslogin,setusername1,setadmin,login}) => {
        try {
            console.log('Sending login request:', { username: u1, password: p2 });
             const response = await fetch('http://localhost:5100/login', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({ username: u1, password: p2 }),
             });
             const data=await response.json();
            if (response.ok) {
                login(data.token);
                setsuccesslogin(true);
                setusername1(u1);
                setloginfail(false);
                if(u1==='admin'){
                    setadmin(true);
                }

            } else {
                setloginfail(true);
                if(u1 && p2){
                    setloginfaildetail("Invalid Username and Password");
                }
                if(!u1 && !p2){
                    setloginfaildetail("please enter the username and password");
                }
                if(u1 && !p2){
                    setloginfaildetail("please enter the password");
                }
                if(!u1 && p2){
                    setloginfaildetail("please enter the username");
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
}

export default signinapi

