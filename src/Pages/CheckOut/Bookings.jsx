import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[url])
    return (
        <div>
            <h1>Bookin:{booking.length} </h1>
        </div>
    );
};

export default Bookings;