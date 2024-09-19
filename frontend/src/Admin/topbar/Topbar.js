import './topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">Iamadmin</span>
        </div>
        <div className="topbarRight">
          <div className="topbarItem">
            <span className="topbarBadge">2</span>
          </div>
          <div className="topbarItem">
            <span className="topbarBadge">2</span>
          </div>
          <div className="topbarItem">
          </div>
          <div className="topbarItem">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;
