import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar1'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <div className="sidebarList">
            <Link to='/admin/' className='link'>
              <div className="sidebarListItem active1">
                <p>Home</p>
              </div>
            </Link>
            <div className="sidebarListItem">
              <p>Analysis</p>
            </div>
            <div className="sidebarListItem">
              <p>Sales</p>
            </div>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <div className="sidebarList">
            <Link to='/admin/users' className='link'>
              <div className="sidebarListItem">
                <p>Users</p>
              </div>
            </Link>
            <Link to='/admin/products' className='link'>
              <div className="sidebarListItem">
                <p>Products</p>
              </div>
            </Link>
            <div className="sidebarListItem">
              <p>Transactions</p>
            </div>
            <div className="sidebarListItem">
              <p>Reports</p>
            </div>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <div className="sidebarList">
            <div className="sidebarListItem">
              <p>Mail</p>
            </div>
            <div className="sidebarListItem">
              <p>Feedback</p>
            </div>
            <div className="sidebarListItem">
              <p>Messages</p>
            </div>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <div className="sidebarList">
            <div className="sidebarListItem">
              <p>Manage</p>
            </div>
            <div className="sidebarListItem">
              <p>Analytics</p>
            </div>
            <div className="sidebarListItem">
              <p>Reports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
