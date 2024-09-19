import axios from "axios";
const updateProductApi = async (Id,name,address,cost,reservation,checkin,checkout,guest,rating) => {
    try{
        const response=await axios.put("http://localhost:5100/admin/updateTour",{Id: Id,Name: name,Address: address,Cost: cost,Reservation: reservation,Checkin: checkin,Checkout: checkout,Guest: guest,Rating: rating});
        if (response.status === 200) {
            console.log("Tour Updated...😊");
        } else {
            console.log("Tour update failed 🥵");
        }
    }
    catch(err){
        console.log("failed in Tour data updation...",err);
    }
  //console.log({Id,name,address,reservation,checkin,checkout,guest,rating});
}

export default updateProductApi
