import { useState } from 'react'
import VL from '../Images/VL.png';
import HL from '../Images/HL.png';
import nysc from '../Images/nysc.svg';
import Man from '../Images/Man_Working_at_Desk.svg';
import behindMan from '../Images/behindMan.svg';
import { HiMiniArrowRight } from 'react-icons/hi2';
const ProgramsDesignedForYou = () => {

    const [programs, setPrograms] = useState('ABD')
    return (
        <div className='xl:px-24 sh:pl-16 sh:pr-10 px-7'>
            <p className='text-[#ffffff] mx-auto bg-gradient-to-r from-[#002B5B] to-[#005BC1] bg-clip-text text-transparent lf:text-[40px] mm:text-[32px] sk:text-[25px] text-xl mm:text-start text-center font-semibold'>Programs Designed for Future Business Leaders</p>
            <div className='flex justify-between items-center md:flex-row flex-col gap-5 border-b border-[#797979B2] lf:text-base mk:text-sm md:text-xs sa:text-base text-xs w-full mx-auto pb-3 mt-10'>
                <div className='flex items-center border-b md:border-none border-[#797979B2] justify-between w-full'>
                    <p onClick={() => setPrograms('ABD')} className={`p-[10px] cursor-pointer w-full text-center rounded-[10px] ${programs === 'ABD' ? 'bg-[#002B5B33]' : ''}`}>Associate Bachelor’s Degree</p>
                    <p onClick={() => setPrograms('EMP')} className={`p-[10px] cursor-pointer w-full text-center rounded-[10px] ${programs === 'EMP' ? 'bg-[#002B5B33]' : ''}`}>Executive MBA Program</p>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <p onClick={() => setPrograms('EDP')} className={`p-[10px] cursor-pointer w-full text-center rounded-[10px] ${programs === 'EDP' ? 'bg-[#002B5B33]' : ''}`}>Executive Diploma Program</p>
                    <p onClick={() => setPrograms('PC')} className={`p-[10px] cursor-pointer w-full text-center rounded-[10px] ${programs === 'PC' ? 'bg-[#002B5B33]' : ''}`}>Professional Certificates</p>
                </div>
            </div>
            <div className='mt-5 mc:grid grid-cols-2 w-full'>
                <div>
                    <p className='mc:text-[32px] text-[25px] font-medium'>Program Overview</p>
                    <p className='mc:text-[18px] text-base font-normal mt-3'>
                        Our Associate Bachelor’s Degree program equips you with the knowledge and skills to thrive in a rapidly evolving world. Taught by world-class professors and lecturers, the curriculum is designed to instill key values, strategic thinking, and problem-solving skills essential for tackling modern management challenges.
                    </p>
                    <div className='mt-8 relative'>
                        <div className='relative'>
                            <img className='absolute z-20 sa:right-[35%] sa:block hidden h-full sa:-translate-x-[35%]' src={VL} alt="" />
                            <img className='absolute z-20 sa:left-[30%]  right-[50%] -translate-x-[50%] h-full sa:-translate-x-[30%]' src={VL} alt="" />
                            <img className='absolute z-20 sa:top-1/2 top-[33%] -translate-y-1/3 sa:-translate-y-1/2' src={HL} alt="" />
                            <img className='absolute z-20 sa:top-1/2 bottom-[33%] -translate-y-1/3 sa:-translate-y-1/2' src={HL} alt="" />
                            <div className=' grid sa:grid-cols-3 grid-cols-2 gap-3 z-10 relative mt-3'>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>🌐</p>
                                    <p className='sh:text-[20px] font-normal'>Globally Recognized Degree</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>💻</p>
                                    <p className='sh:text-[20px] font-normal'>Study <br /> Anywhere, <br /> Anytime</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>🎓</p>
                                    <p className='sh:text-[20px] font-normal'>Qualifies for Postgraduate Studies</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <img className='sh:size-auto size-[34px]' src={nysc} alt="" />
                                    <p className='sh:text-[20px] font-normal'>Meets National Service Requirements</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>📜</p>
                                    <p className='sh:text-[20px] font-normal'>Enroll with <br /> just your <br /> SSCE</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='sh:text-[36px] text-[23px]'>🏅</p>
                                    <p className='sh:text-[20px] font-normal'>World Class Educational Quality</p>
                                </div>
                            </div>
                        </div>
                        <button className='py-[10px] px-9 rounded-[15px] mx-auto sd:mx-0 flex items-center mt-10 gap-2 shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>
                            Explore Courses
                            <HiMiniArrowRight className='mt-1' />
                        </button>
                    </div>
                </div>
                <div className='relative sd:block hidden'>
                    <img src={behindMan} className='max-w-[400px] absolute z-0 bottom-10 left-1/2 mc:left-0 mc:-translate-x-0 -translate-x-1/2 max-h-[301px]' alt="" />
                    <img src={Man} className='max-w-[670px max-h-[450px] z-30 mx-auto mc:absolute relative bottom-14' alt="" />
                    <p className='bg-[#002B5BA6] text-white xl:text-[18px] mh:block hidden text-[15px] font-normal rounded-2xl shadow-lg shadow-[#00000040] py-5 px-2 w-auto absolute bottom-[325px] right-[90px] mc:right-[35px] translate-x-[50px] xl:translate-x-0'>
                        ✅ 85% Employment Rate
                    </p>
                    <p className='bg-[#ffffff] text-black flex items-center text-[18px] font-normal rounded-2xl shadow-lg shadow-[#00000040] py-3 px-2 w-auto absolute mc:bottom-[55px] mc:translate-y-[40px] bottom-5 z-50 border border-[#79797977] mh:right-36 sh:right-5 right-0 mc:right-24 xl:translate-x-0 mh:translate-x-24'>
                        <span className='text-[30px]'>🌍</span> Students from 30+ Countries
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProgramsDesignedForYou