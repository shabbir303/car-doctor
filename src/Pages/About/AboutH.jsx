/* eslint-disable react/no-unescaped-entities */
import Long from '../../assets/person.jpg'
import Short from '../../assets/parts.jpg'
import { Link } from 'react-router-dom';

const AboutH = () => {
    return (
        <div className='max-w-7xl mx-auto flex gap-[222px] '>
            <div className='relative flex-[1]'>
            <img src={Long} alt="" className='w-[460px] h-[473px] object-cover rounded-xl ' />
            <img src={Short} className="w-[280px] h-[285px] border-[8px] border-white object-cover absolute top-[240px] left-[250px] rounded-xl " />
            </div>
            <div className='flex-[1]'>
                <h1 className='text-[#FF3811] font-inter text-[20px] font-[700] '>About</h1>
                <h1 className='text-[45px] font-[700] '>We are qualified & of experience in this field</h1>
                <h1 className='text-[16px] font-[400] mt-[40px] text-[#737373] '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h1>
                <h1 className='text-[16px] font-[400] mt-[30px] text-[#737373] '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h1>
                <Link to='/about'>
                <button className='text-white bg-[#FF3811] px-[15px] py-[8px] mt-[50px] uppercase rounded-lg text-[14px] font-[400]'>more info</button>
                </Link>
            </div>
        </div>
    );
};

export default AboutH;