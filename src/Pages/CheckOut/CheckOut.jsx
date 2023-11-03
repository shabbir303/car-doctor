import { useLoaderData } from "react-router-dom";
import image from "../../assets/checkout.png"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    // console.log(service);
    const { title, price, service_id, img } = service;
    const { user } = useContext(AuthContext);

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const email = user?.email;
        const date = form.date.value;

        const order = {
            customerName: name,
            email,
            date,
            img,
            price: price,
            id: service_id,
            service: title,
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json)
            .then(data => {
                console.log(data);
            })


        console.log(order);
        // ei data ke server e pathate hole insert option er moddhe insert a document korte hobe
    }
    return (
        <div className="max-w-7xl mx-auto " >
            <div className="bg-slate-600 mt-[50px] mb-[100px] rounded-xl relative">
                <img src={image} alt="" className="mix-blend-overlay w-full object-cover  " />
                <h1 className="text-white text-[45px] font-[700] absolute top-[100px] left-[50px]">{title} </h1>
            </div>


            <section className="bg-gray-100 mb-[100px] ">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                At the same time, the fact that we are wholly owned and totally
                                independent from manufacturer and other group control gives you
                                confidence that we will only recommend what is right for you.
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-2xl font-bold text-pink-600">
                                    0151 475 4450
                                </a>

                                <address className="mt-2 not-italic">
                                    282 Kevin Brook, Imogeneborough, CA 58517
                                </address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleBooking}
                                className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <h1 className="py-[10px] text-[18px] font-[600] text-[#FF3811] ">Name</h1>
                                        <input
                                            className="w-full rounded-lg border-[1px] p-3 text-sm "
                                            placeholder="Name"
                                            type="text"
                                            id="name"
                                            name='name'
                                            defaultValue={user?.displayName}
                                        />
                                    </div>
                                    <div>
                                        <h1 className="py-[10px] text-[18px] font-[600] text-[#FF3811] ">Date</h1>
                                        <input
                                            className="w-full rounded-lg border-[1px] p-3 text-sm"
                                            placeholder=""
                                            type="date"
                                            id="phone"
                                            name='date'

                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <h1 className="py-[10px] text-[18px] font-[600] text-[#FF3811] ">Email</h1>
                                        <input
                                            className="w-full rounded-lg border-[1px] p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name='email'
                                            defaultValue={user?.email}
                                        />
                                    </div>

                                    <div>
                                        <h1 className="py-[10px] text-[18px] font-[600] text-[#FF3811] ">Due Amount</h1>
                                        <input
                                            className="w-full rounded-lg border-[1px] p-3 text-sm"

                                            type="tel"
                                            id="phone"
                                            name='phone'
                                            defaultValue={`$${price}`}
                                        />
                                    </div>
                                </div>



                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-[1px] p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                        name='message'
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="btn w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Order Confirm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckOut;