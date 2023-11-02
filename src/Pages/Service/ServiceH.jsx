/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ServiceH = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServiceData(data)
            })
    }, [])
    console.log(serviceData);
    return (
        <div>
            <div className="font-inter text-center ">
                <h1 className="text-[20px] font-[700] text-[#FF3811] ">Service</h1>
                <h1 className="text-[45px] font-[700] mt-[15px] ">Our Service Area</h1>
                <p className="text-[16px] font-[400] mt-[15px] text-[#737373] ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 max-w-7xl gap-[20px] mx-auto my-[40px]">
                {
                    serviceData.map(eachService => <div key={eachService.id} className="p-[20px] border-[1px] rounded-lg">
                        <img src={eachService.img} alt="" className="w-[400px] h-[210px] object-cover rounded-lg " />
                        <h1 className="text-[25px] font-[700] my-[15px] ">{eachService.title} </h1>
                        <div className="flex mb-[20px] justify-between items-center">
                            <h1 className="text-[#FF3811] text-[20px] font-[600] ">Price: ${eachService.price} </h1>
                            <img className="h-[24px] w-[24px] " src="https://i.ibb.co/cC3Wn3S/Frame.png" alt="" />
                        </div>

                    </div>)
                }
            </div>
            <Link to='service'>
                <button className="btn btn-outline btn-error my-[50px] flex justify-center items-center mx-auto text-center">More Services </button>
            </Link>
        </div>
    );
};

export default ServiceH;