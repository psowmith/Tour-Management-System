import { useEffect } from "react"
import axios from "axios";
const Listapi = async({placee,loc,checkin,checkout,guests,setlength,setData}) => {
    useEffect(()=>{
        const datafetch=async ()=>{
            try{
                if(placee){
                    const response=await axios.get(`http://localhost:5100/lon/${placee}`);
                    setlength(response.data.length);
                    setData(response.data);
                }
                else if(loc){
                    const response=await axios.get(`http://localhost:5100/lon/${loc}?checkin=${checkin}&checkout=${checkout}&guests=${guests}`);
                    setlength(response.data.length);
                    setData(response.data);
                }
                
            }
            catch(error){
                console.error('Error fetching data:', error);
            }
        };
        datafetch();
    },[placee,loc,checkin,checkout,guests])
    
}

export default Listapi
