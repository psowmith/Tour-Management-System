import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Home from "../pages/home/Home";
import { Route,Routes } from "react-router-dom";
import './Admin.css';
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import ProductList from "../pages/productList/ProductList";
import Product from "../pages/product/Product";
import NewProduct from "../pages/newProduct/NewProduct";
const Admin = () => {
  return (
    <div>
      <Topbar />
      <div className="container3">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Admin
