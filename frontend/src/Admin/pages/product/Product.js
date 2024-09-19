import './product.css';
import { Link } from 'react-router-dom';
//import { Publish } from "@material-ui/icons";
import { useParams } from 'react-router-dom';
import TourData from '../../adminApi/tourData';
import updateProductApi from '../../adminApi/updateProductApi';
import { useRef } from 'react';
const Product = () => {
  const Name=useRef();
  const Address=useRef();
  const Cost=useRef();
  const Reservation=useRef();
  const Checkin=useRef();
  const Checkout=useRef();
  const Guest=useRef();
  const Rating=useRef();
  const {productId}=useParams();
  const data=TourData();
  const tour=data.find((user) => user._id === productId);
    const isLoading = data.length === 0; 
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const booleanToString = (value) => (value ? "Yes" : "No");
    const handleUpdate=()=>{
      updateProductApi(tour.name,Name.current.value,Address.current.value,Cost.current.value,Reservation.current.value,Checkin.current.value,Checkout.current.value,Guest.current.value,Rating.current.value);
    }
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Tour</h1>
        <Link to="/admin/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
                    <img src={tour.image} alt="" className="productInfoImg" />
                    <span className="productName">{tour.name}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">{tour._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">address:</span>
                        <span className="productInfoValue">{tour.address}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">reservation status:</span>
                        <span className="productInfoValue">{booleanToString(tour.reservation)}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">checkin:</span>
                        <span className="productInfoValue">{tour.checkin}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">checkout:</span>
                        <span className="productInfoValue">{tour.checkout}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">guest(s):</span>
                        <span className="productInfoValue">{tour.guest}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">rating:</span>
                        <span className="productInfoValue">{tour.count}</span>
                    </div>
                </div>
          </div>
        </div>
      <div className="productBottom">
        <form className="productForm" onSubmit={(e)=>{e.preventDefault()}}>
                <div className="productFormLeft">
                    <label>Name</label>
                    <input type="text" placeholder={tour.name} ref={Name}/>
                    <label>Address</label>
                    <input type="text" placeholder={tour.address} ref={Address}/>
                    <label>Cost</label>
                    <input type="number" placeholder={tour.cost} ref={Cost}/>
                    <label>Reservation Status</label>
                    <input type="text" placeholder={booleanToString(tour.reservation)} ref={Reservation}/>
                    <label>Checkin</label>
                    <input type="date" placeholder={tour.checkin} ref={Checkin}/>
                    <label>Checkout</label>
                    <input type="date" placeholder={tour.checkout} ref={Checkout}/>
                    <label>Guest(s)</label>
                    <input type="number" placeholder={tour.guest} ref={Guest}/>
                    <label>Rating</label>
                    <input type="number" placeholder={tour.count} ref={Rating}/>
                </div>
                <div className="productFormRight">
                    <button className="productButton" onClick={handleUpdate}>Update</button>
                </div>
          </form>
      </div>
    </div>
  )
}

export default Product
