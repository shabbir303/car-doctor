import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url])

    const handleDelete =(id)=>{
      const proceed = confirm('Are you sure you want to delete')
        if(proceed){
          fetch(`http://localhost:5000/booking/${id}`,{
           method: 'DELETE',
        })
          .then(res=>res.json())
          .then(data=>console.log(data))
        }
    }
    return (
        <div>
            {/* <h1>Bookin:{booking.length} </h1> */}
            <div className="overflow-x-auto max-w-7xl mx-auto">
                <table className="table mb-[50px]">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>

                    {/* row 1 */}


                    <div className="w-full">
                    {
                        booking.map(book => <div key={book._id} className="w-full]">
                            <tbody className="">
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={book.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{book.customerName}</div>
                                                <div className="text-sm opacity-50">{book.email} </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex gap-[50px] justify-center">
                                        {book.service}
                                        
                                        <p className="badge badge-ghost badge-sm">{book.date} </p>
                                    </td>
                                    <td>{'$' + book.price} </td>

                                    <th>
                                        <button onClick={()=> handleDelete(book._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            </tbody>
                        </div>

                        )
                    }
                    </div>



                    {/* row 2 */}


                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default Bookings;