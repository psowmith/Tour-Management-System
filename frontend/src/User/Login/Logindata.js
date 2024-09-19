import { useState } from "react"
const Logindata = () => {
    const [isSliding, setsliding] = useState(false);
    const [isloginfail,handleloginfail]=useState(false);
    const [isloginfaildetail,handleloginfaildetail]=useState('');
    const [issuccesslogin,handlesuccesslogin]=useState(false);
    const [username1,handleusername1]=useState('');
    const [admin,handlesetadmin]=useState(false);
    const setIsSliding=(data)=>{
        setsliding(data);
    }
    const setloginfail=(data)=>{
        handleloginfail(data);
    }
    const setloginfaildetail=(data)=>{
        handleloginfaildetail(data);
    }
    const setsuccesslogin=(data)=>{
        handlesuccesslogin(data);
    }
    const setusername1=(data)=>{
        handleusername1(data);
    }
    const setadmin=(data)=>{
        handlesetadmin(data)
    }
  return{isSliding,setIsSliding,
    isloginfail,setloginfail,
    isloginfaildetail,setloginfaildetail,
    issuccesslogin,setsuccesslogin,
    username1,setusername1,
    admin,setadmin,
    };
}

export default Logindata
