import { FaBars,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../User/Homepage.css';
import logo from '../../images/logo.png';
import search from '../../images/search.png';
import image_1 from '../../images/image-1.png';
import image_2 from '../../images/image-2.png';
import image_3 from '../../images/image-3.png';
import image_4 from '../../images/image-4.png';
import image_5 from '../../images/image-5.png';
import image_6 from '../../images/dubai.png';
import image_7 from '../../images/new-york.png';
import image_8 from '../../images/paris.png';
import image_9 from '../../images/new-delhi.png';
import { useState,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
const Homepage = () => {
    const navigate=useNavigate();
    const loc=useLocation();
    const user=loc.state;
    const [location,setlocation]=useState('');
    const [checkindate,setcheckindate]=useState('');
    const [checkoutdate,setcheckoutdate]=useState('');
    const [isguest,setguest]=useState('');
    const navBarRef = useRef(null);
    const togglebtn=()=>{
        if (navBarRef.current) {
            navBarRef.current.classList.toggle("hidemenu");
          }
    }
     const [islist,setlist]=useState(false);
     const [places,setplaces]=useState(null);
     const listpage=()=>{
         setlist(true);
     }
     const togglelistpage=(place)=>{
        setlist(true);
        setplaces(place);
     }
  return (
      <div>
        {islist && navigate('/listpage',{state:{places,location,checkindate,checkoutdate,isguest,user}})}
        {!islist && <div>
        <div className="header">
            <nav ref={navBarRef}>
                <img src={logo} alt='' className='logo'/>
                <div className='nav-links'>
                    <li><p className='active'>Popular Places</p></li>
                    <li onClick={()=>navigate('/')}><p>Sign out</p></li>
                    <li><p><FaUser style={{"width":"3%","height":"3%",marginTop:'-1.5%',marginLeft:'-3%'}}/>{user}</p></li>
                </div>
                <i className='menuicon' onClick={togglebtn}><FaBars /></i>
            </nav>
            <div className='container2'>
                <h1>Find Your Next Stay</h1>
                <div className="search-bar">
                    <form onSubmit={listpage}>
                        <div className='location-input'>
                            <label>Location</label>
                            <input type='text' placeholder='Where are you going' onChange={(e)=>setlocation(e.target.value)} required />
                        </div>
                        <div>
                            <label>Check in</label>
                            <input type='date' placeholder='Add Dates'  onChange={(e)=>setcheckindate(e.target.value)} required />
                        </div>
                        <div>
                            <label>Check Out</label>
                            <input type='date' placeholder='Add Dates'  onChange={(e)=>setcheckoutdate(e.target.value)} required />
                        </div>
                        <div>
                            <label>Guest</label>
                            <input type='number' placeholder='Add Guest'  onChange={(e)=>setguest(e.target.value)} required />
                        </div>
                        <button type='submit'><img src={search} alt=''/></button>
                    </form>
                </div>
            </div>
        </div>
        <div className='container1'>
            <h2 className='sub-title'>Exclusives</h2>
            <div className='exclusives'>
                <div onClick={()=>togglelistpage("london")}>
                    <img src={image_1} alt=''/>
                    <span>
                        <h3>London</h3>
                    </span>
                </div>
                <div onClick={()=>togglelistpage("switzerland")}>
                    <img src={image_2} alt=''/>
                    <span>
                        <h3>Switzerland</h3>
                    </span>
                </div>
                <div onClick={()=>togglelistpage("france")}>
                    <img src={image_3} alt=''/>
                    <span>
                        <h3>France</h3>
                    </span>
                </div>
                <div onClick={()=>togglelistpage("australia")}>
                    <img src={image_4} alt=''/>
                    <span>
                        <h3>Australia</h3>
                    </span>
                </div>
                <div onClick={()=>togglelistpage("india")}>
                    <img src={image_5} alt=''/>
                    <span>
                        <h3>India</h3>
                    </span>
                </div>
                <div onClick={()=>togglelistpage("newyork")}>
                    <img src={image_5} alt=''/>
                    <span>
                        <h3>New York</h3>
                    </span>
                </div>
                <div onClick={()=>togglelistpage("sanfrancisco")}>
                    <img src={image_5} alt=''/>
                    <span>
                        <h3>San Francisco</h3>
                    </span>
                </div>
            </div>
        </div>
        <h2 className='sub-title'>Trending Places</h2>
        <div className='trending'>
            <div onClick={()=>togglelistpage("dubai")}>
                <img src={image_6} alt=''/>
                <h3>Dubai</h3>
            </div>
            <div onClick={()=>togglelistpage("newyork")}>
                <img src={image_7} alt=''/>
                <h3>New York</h3>
            </div>
            <div onClick={()=>togglelistpage("paris")}>
                <img src={image_8} alt=''/>
                <h3>Paris</h3>
            </div>
            <div onClick={()=>togglelistpage("germany")}>
                <img src={image_9} alt=''/>
                <h3>Germany</h3>
            </div>
        </div>
        <div className="cta">
            <h3>Sharing <br></br>Is Earning Now</h3>
            <p>Great oppertunity to make money by <br></br>sharing your extra space</p>
            <p href='#' className='cta-btn'>Know More</p>
        </div>
        <div className='about-msg'>
            <h2>About Staybnb</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        </div>
        <div className='footer1'>
            <hr></hr>
            <p>Copyright @ 2024, travelWebsite-Mk1</p>
        </div>
    </div>}
      </div>
  )
}

export default Homepage
