import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoutes';  // Adjusted import
import Welcome from './Welcomepage/Welcome';
import Login from './User/Login/Login';
import Homepage from './User/Home/Homepage';
import Listpage from './User/List/Listpage';
import Booking from './User/Booking/Booking';
import Admin from './Admin/Home/Admin';
import UserList from './Admin/pages/userList/UserList';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/listpage" element={<Listpage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/users" element={<UserList />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
