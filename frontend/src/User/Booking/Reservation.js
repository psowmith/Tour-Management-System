import axios from "axios"
export const Reservation= async (name)=>{
    try{
        const response=await axios.put("http://localhost:5100/lon/reserve",{name : name});
        if(response.status===200){
            console.log("Reserved");
        }
        else{
            console.log("Rervation failed 🥵");
        }
    }
    catch(err){
        console.log("err occured for reservation",err);
    }
}
