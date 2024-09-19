import { FaBars,FaStar,FaUser } from 'react-icons/fa';
import '../../User/Homepage.css';
import logo from '../../images/logo-red.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Listdata from './Listdata';
import Listapi from './ListApi';
import ListApi1 from './ListApi1';
const Listpage = () => {
    const navigate=useNavigate();
    const loca=useLocation();
    const { state } = loca;
    const { places: placee, location: loc, checkindate: checkin, checkoutdate: checkout, isguest: guests, user: user1 } = state || {};
    const {data, setData} = Listdata();
    const {length,setlength}=Listdata();
    const {hotel,sethotel}=Listdata();
    const {beach,setbeach}=Listdata();
    const {pool,setpool}=Listdata();
    const {home1,sethome1}=Listdata();
    const {booking,setbooking}=Listdata();
    const {minPrice, setMinPrice} = Listdata();
    const {maxPrice, setMaxPrice} = Listdata();
    const {filter,setfilter}=Listdata();
    Listapi({placee,loc,checkin,checkout,guests,setlength,setData});
    var navBar=document.getElementById("navbar");
    const togglebtn=()=>{
        if(navBar){
            navBar.classList.toggle("hidemenu");
        }
    }
    const generateStars = (numberOfStars) => {
        const stars = [];
        for (let i = 0; i < numberOfStars; i++) {
          stars.push(<FaStar key={i} className='half-star' style={{ color: 'gold' }} />);
        }
        return stars;
      };
    const togglefilter=()=>{
        setfilter(true);
    }
    const togglebooking=(item1)=>{
        setbooking(item1);
    }
    const filterapply=async ()=>{
        ListApi1({placee,loc,checkin,checkout,guests,setlength,setData,setfilter,hotel,pool,beach,minPrice,maxPrice})
    }
  return (
    <div>
        {home1 ? (navigate('/homepage',{state:user1})) : (
        <>
        <nav id='navbar' className='navbar-white'>
            <img src={logo} alt='' className='logo'/>
            <div className='nav-links'>
                <li><p className='active'>Popular plcaes</p></li>    
                <li><p onClick={()=>sethome1(true)}>Home</p></li> 
                <li><p><FaUser style={{"width":"3%","height":"3%",marginTop:'-1.5%',marginLeft:'-3%'}}/>{user1}</p></li> 
            </div>
            <i className='menuicon' onClick={togglebtn}><FaBars /></i>
        </nav>
        <div className='container2'>
            <div className='list-container'>
                <>
                {booking ? (navigate('/booking',{state:{count:booking.count,address:booking.address,image1:booking.image1,image2:booking.image2,image3:booking.image3,image4:booking.image4,image5:booking.image,name:booking.name,guest:booking.guest,contain:booking.contain,cost:booking.cost,checkin:booking.checkin,checkout:booking.checkout,source:booking.source,id:booking._id}})) : (
                    <div className='left-col'>
                        <p>{length} Options</p>
                        <h1>{placee}</h1>
                        {data.map((item)=>(
                            <div className='house' key={item._id} onClick={()=>togglebooking(item)}>
                                <div className='house-img'>
                                    <img src={item.image} alt=''/>
                                </div>
                                <div className='house-info'>
                                    <p>{item.name}</p>
                                    <h3>{item.address}</h3>
                                    <p>{item.overview}</p>
                                    {generateStars(item.count)}
                                    <div className='house-price'>
                                        <p>{item.guest} guests</p>
                                        <h4>{item.cost}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                </>
                {!booking && <div className='right-col'>
                    <div className='sidebar'>
                        <h2>Select Filters</h2>
                        <h3>Property Type</h3>
                        <div className='filter'>
                             <p><input type='checkbox' onChange={(e)=>sethotel((prev) => !prev)}/>  Hotels</p> 
                        </div>
                        <div className='filter'>
                             <p><input type='checkbox' onChange={(e)=>setpool((prev) => !prev)}/>   pools</p> 
                        </div>
                        <div className='filter'>
                             <p><input type='checkbox' onChange={(e)=>setbeach((prev) => !prev)}/>   beach</p> 
                        </div>
                        <div className='sidebar-link'>
                            <p onClick={togglefilter}>View More</p>
                        </div>
                        <div className='apply' onClick={filterapply}>Apply</div>
                        {filter && <div className='additional-filters'>
                            <h2>Price Range</h2>
                            <p>Monthly prices before fees and taxes</p>
                            <div className="price-input">
                                <div className='field'>
                                    <span>Min</span>
                                    <input type='number' className='input-min' value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))}/>
                                </div>
                                <div className="seperator">-</div>
                                <div className='field'>
                                    <span>Max</span>
                                    <input type='number' className='input-min' value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}/>
                                </div>
                            </div>
                            <div className='apply' onClick={filterapply}>Apply</div>
                        </div>}
                    </div>
                </div>}
            </div>
        </div>
        <div className='footer1'>
            <hr></hr>
            <p>Copyright @ 2024, travelWebsite-Mk1</p>
        </div>
        </>)}
    </div>
  )
}

export default Listpage
