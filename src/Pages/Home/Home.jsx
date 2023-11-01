import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../../public/1.jpg';
import image2 from '../../../public/2.jpg';
import image3 from '../../../public/3.jpg';
import image4 from '../../../public/4.jpg';
import image5 from '../../../public/5.jpg';
import image6 from '../../../public/6.jpg';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AboutH from '../About/AboutH';
// import './Swiper.css'

const Home = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto h-[700px] my-3 bg-slate-700 rounded-3xl relative">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper  max-w-[100%] max-h-[700px] mix-blend-overlay   "
                >
                    <SwiperSlide className='h-[600px]'><img className="object-fit  w-full" src={image2} alt="" /></SwiperSlide>
                    <SwiperSlide className='h-[600px]'><img className="object-fit  w-full" src={image1} alt="" /></SwiperSlide>
                    <SwiperSlide className='h-[600px]'><img className="object-fit  w-full" src={image3} alt="" /></SwiperSlide>
                    <SwiperSlide className='h-[600px]'><img className="object-fit  w-full" src={image4} alt="" /></SwiperSlide>
                    <SwiperSlide className='h-[600px]'><img className="object-fit  w-full" src={image5} alt="" /></SwiperSlide>
                    <SwiperSlide className='h-[600px]'><img className="object-fit  w-full" src={image6} alt="" /></SwiperSlide>
                </Swiper>
                <div className='absolute top-[130px] left-[60px] '>
                    <h1 className='font-inter text-[60px] font-[700] text-white mb-[30px] leading-[65px] ' >Affordable <br /> Price For Car <br /> Servicing</h1>
                    <h1 className='text-[18px] font-[400] font-inter text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</h1>
                    <div className='mt-[50px] flex gap-[40px]'>
                        <button className='text-[18px] font-[600] uppercase px-[20px] py-[10px] bg-[#FF3811]'>discover me</button>
                        <button className='text-white text-[18px] font-[600] uppercase btn btn-outline btn-info'>latest project</button>
                    </div>
                </div>
                    
            </div>
            <div className='my-[130px]'>
                        <AboutH></AboutH>
                    </div>
        </>
    );
};

export default Home;