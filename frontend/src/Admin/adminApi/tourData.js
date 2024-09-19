import axios from "axios";
import { useState, useEffect } from "react";

const TourData = () => {
    const [tourData, setTourData] = useState([]);

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await axios.get("http://localhost:5100/admin/tourData");
                setTourData(response.data);
            } catch (err) {
                console.log("Error in fetching all users:", err);
            }
        };

        fetchTourData();
    }, []); 

    return tourData;
}

export default TourData;
