import './Welcome.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = (status) => {
    const [login,setlogin]=useState(false);
    const navigate=useNavigate();
  return (
    <nav className='nav'>
        <h1 className='title'>Tour Guide</h1>
        {login ? (navigate('/login')) : (<div className='nav1'>
          <h1 className='navh11'>About</h1>
          <h1 className='navh11'>Contact</h1>
          <h1 className='navh11' onClick={()=>setlogin(true)}>
            Sign in/Login
          </h1>
        </div>)}
    </nav>
  )
}

export default Navbar
