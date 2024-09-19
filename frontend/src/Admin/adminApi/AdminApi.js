import axios from "axios";
import { useState, useEffect } from "react";

const AdminApi = () => {
    const [sales, setSales] = useState({ totalCost: 0 });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5100/admin/data");
                setSales({ totalCost: response.data.totalCost });
            } catch (err) {
                console.log("error in Admin API...", err);
            }
        };

        fetchData();
    }, []);

    return sales;
};

export default AdminApi;
