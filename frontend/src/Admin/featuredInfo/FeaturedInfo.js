import './FeaturedInfo.css'
import AdminApi from '../adminApi/AdminApi';
const FeaturedInfo = () => {
  const { totalCost } = AdminApi();
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">₹{totalCost}</span>
        </div>
        <span className="featuredSub">Total Sales Obtained...</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
