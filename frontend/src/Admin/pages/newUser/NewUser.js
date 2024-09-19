import './newUser.css';
import { useRef } from 'react';
import createUserApi from '../../adminApi/createUserApi';
const NewUser = () => {
  const username=useRef();
  const email=useRef();
  const password=useRef();
  const userCreate=()=>{
    const u=username.current.value;
    const e=email.current.value;
    const p=password.current.value;
    createUserApi(u,p,e);
    alert("User updated...")
  }
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New user</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder='john' ref={username}/>
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder='john@gmail.com' ref={email}/>
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder='password' ref={password}/>
        </div>
        <button className="newUserButton" onClick={userCreate}>Create</button>
      </form>
    </div>
  )
}

export default NewUser
