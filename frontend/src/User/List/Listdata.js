import { useState } from "react"
const Listdata = () => {
    const [data, handlesetdata] = useState([]);
    const [length,sethandlesetlength]=useState(0);
    const [hotel,handlesethotel]=useState(false);
    const [beach,handlesetbeach]=useState(false);
    const [pool,handlesetpool]=useState(false);
    const [home1,handlesethome1]=useState(false);
    const [booking,handlesetbooking]=useState(null);
    const [minPrice, handlesetMinPrice] = useState(12000);
    const [maxPrice, handlesetMaxPrice] = useState(2100000);
    const [filter,handlesetfilter]=useState(false);
    const setData=(data)=>{
        handlesetdata(data);
    }
    const setlength=(data)=>{
        sethandlesetlength(data)
    }
    const sethotel=(data)=>{
        handlesethotel(data);
    }
    const setbeach=(data)=>{
        handlesetbeach(data);
    }
    const setpool=(data)=>{
        handlesetpool(data);
    }
    const sethome1=(data)=>{
        handlesethome1(data);
    }
    const setbooking=(data)=>{
        handlesetbooking(data);
    }
    const setMinPrice=(data)=>{
        handlesetMinPrice(data);
    }
    const setMaxPrice=(data)=>{
        handlesetMaxPrice(data);
    }
    const setfilter=(data)=>{
        handlesetfilter(data);
    }
    return{data,setData,
        length,setlength,
        hotel,sethotel,
        beach,setbeach,
        pool,setpool,
        home1,sethome1,
        booking,setbooking,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        filter,setfilter};
}
export default Listdata
