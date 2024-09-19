import './User.css';
import { Link, useParams } from 'react-router-dom';
import AllUsersApi from '../../adminApi/AllUsersApi';
import updateUserApi from '../../adminApi/updateUserApi';
import { useRef } from 'react';

const User = () => {
    const email = useRef();
    const username = useRef();
    const data1 = AllUsersApi();
    const { userId } = useParams();
    const user = data1.find((user) => user._id === userId);
    const isLoading = data1.length === 0;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const updatedata = () => {
        updateUserApi(user.email, email.current.value, username.current.value);
        alert("Data updated successfully!");
    }

    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/admin/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://www.rochesterfirst.com/wp-content/uploads/sites/66/2018/02/Jennifer20Lawrence_1519583066062.jpg_35217544_ver1.0.jpg?w=572" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.username}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account details</span>
                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">Username: {user.username}</span>
                        </div>
                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">Email: {user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <div className="userUpdateTitle"></div>
                    <form className="userUpdateForm" onSubmit={(e) => { e.preventDefault() }}>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder={user.username} className='userUpdateInput' ref={username} />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder={user.email} className='userUpdateInput' ref={email} />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <button className="userUpdateButton" onClick={updatedata}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
