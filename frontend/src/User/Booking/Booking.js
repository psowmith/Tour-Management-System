import '../Homepage.css';
import { FaStar } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Reservation } from './Reservation';
import { useState } from 'react';
const Booking = () => {
    const [reserve,setreserve]=useState("reserve");
    const loca=useLocation();
    const {state}=loca;
    const { count, address, image1, image2, image3, image4, image5, name, guest, contain, cost, checkin, checkout, source} = state || {};
    const generateStars = (numberOfStars) => {
        const stars = [];
        for (let i = 0; i < numberOfStars; i++) {
          stars.push(<FaStar key={i} className='half-star' style={{ color: 'gold' }} />);
        }
        return stars;
      };
      const ci=new Date(checkin).toLocaleDateString();
      const co=new Date(checkout).toLocaleDateString();
      const handleDateInputFocus = (e) => {
        e.target.type = 'date';
      }

      const handleDateInputBlur = (e) => {
          e.target.type = 'text';
      }
      const handleReserve=(data)=>{
        Reservation(data);
        setreserve("reserved");
      }
  return (
    <div>
      <div className="house-details">
        <div className="house-title">
            <h1>{name}</h1>
            <div className="row">
                <div><p>{generateStars(count)}{address}</p></div>
            </div>
        </div>
        <div className="gallery">
            <div className="gallery-img-1"><img src={image1} alt=''  style={{width:'100%',height:'100%'}}/></div>
            <img src={image2} alt='' style={{width:'100%',height:'100%',borderRadius:"10px"}}/>
            <img src={image3} alt='' style={{width:'100%',height:'100%',borderRadius:"10px"}}/>
            <img src={image4} alt='' style={{width:'100%',height:'100%',borderRadius:"10px"}}/>
            <img src={image5} alt='' style={{width:'100%',height:'100%',borderRadius:"10px"}}/>
        </div>
        <div className="small-details">
            <h2>{name}</h2>
            <p>{guest} guests &nbsp; &nbsp; {contain}</p>
            <h4>{cost}</h4>
        </div>
        <hr className="line" />
        <form className="check-form" onSubmit={(e)=>{e.preventDefault()}}>
            <div>
                <label>Check-in</label>
                <input placeholder={ci}  type="text" onFocus={handleDateInputFocus} onBlur={handleDateInputBlur}/>
            </div>
            <div>
                <label>Check-out</label>
                <input placeholder={co}  type="text" onFocus={handleDateInputFocus} onBlur={handleDateInputBlur}/>
            </div>
            <div className='guest-field'>
                <label>Guest</label>
                <input type='number' value={guest} />
            </div>
            <button className="submit" onClick={()=>{handleReserve(name)}}>{reserve}</button>
        </form>
        <div className="map">
          <h3>Where you’ll be</h3>
          <iframe
            title="Google Map"
            src={source}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Booking
