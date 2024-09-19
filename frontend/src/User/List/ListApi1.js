import axios from "axios";
const ListApi1 =async ({placee,loc,checkin,checkout,guests,setlength,setData,setfilter,hotel,pool,beach,minPrice,maxPrice}) => {
    try {
        let response;
        let hotel2;
        let beach1;
        let pool1;
        if(placee){
            response = await axios.get(`http://localhost:5100/lon/${placee}?minPrice=${minPrice}&maxPrice=${maxPrice}`);
            hotel2=await axios.get(`http://localhost:5100/lon/${placee}/hotels?minPrice=${minPrice}&maxPrice=${maxPrice}`);
            beach1=await axios.get(`http://localhost:5100/lon/${placee}/beach?minPrice=${minPrice}&maxPrice=${maxPrice}`);
            pool1=await axios.get(`http://localhost:5100/lon/${placee}/pools?minPrice=${minPrice}&maxPrice=${maxPrice}`);
        }
        else if(loc){
            response = await axios.get(`http://localhost:5100/lon/${loc}?minPrice=${minPrice}&maxPrice=${maxPrice}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`);
            hotel2=await axios.get(`http://localhost:5100/lon/${loc}/hotels?minPrice=${minPrice}&maxPrice=${maxPrice}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`);
            beach1=await axios.get(`http://localhost:5100/lon/${loc}/beach?minPrice=${minPrice}&maxPrice=${maxPrice}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`);
            pool1=await axios.get(`http://localhost:5100/lon/${loc}/pools?minPrice=${minPrice}&maxPrice=${maxPrice}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`);
        }
        let e=[...response.data].sort(() => Math.random() - 0.5);
          if(hotel){
             e=[...hotel2.data].sort(() => Math.random() - 0.5);
          }
          if(beach){
             e=[...beach1.data].sort(() => Math.random() - 0.5);
          }
          if(pool){
             e=[...pool1.data].sort(() => Math.random() - 0.5);
          }
          if(hotel && beach){
            e=[...hotel2.data,...beach1.data].sort(() => Math.random() - 0.5);
          }
          if(hotel && pool){
            e=[...hotel2.data,...pool1.data].sort(() => Math.random() - 0.5);
          }
          if(beach && pool){
            e=[...beach1.data,...pool1.data].sort(() => Math.random() - 0.5);
          }
          if(hotel && beach && pool){
            e=[...beach1.data,...hotel2.data,...pool1.data].sort(() => Math.random() - 0.5);
          }
        setlength(e.length);
        setData(e);
        setfilter(false); 
      } catch (error) {
        console.error('Error applying filters:', error);
      }
}

export default ListApi1
