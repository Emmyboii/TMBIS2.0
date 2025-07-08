import { useState } from 'react'
import VL from '../Images/VL.png';
import HL from '../Images/HL.png';
import nysc from '../Images/nysc.svg';
import Man from '../Images/Man Working at Desk.svg';
import behindMan from '../Images/behindMan.svg';
import { HiMiniArrowRight } from 'react-icons/hi2';
const ProgramsDesignedForYou = () => {

    const [programs, setPrograms] = useState('ABD')
    return (
        <div className='px-24'>
            <p className='text-[#ffffff] mx-auto bg-gradient-to-r from-[#002B5B] to-[#005BC1] bg-clip-text text-transparent text-[40px] font-semibold'>Programs Designed for Future Business Leaders</p>
            <div className='flex justify-center items-center gap-[40px] border-b border-[#797979B2] w-full mx-auto pb-3 mt-10'>
                <p onClick={() => setPrograms('ABD')} className={`p-[10px] cursor-pointer w-full text-center rounded-[10px] ${programs === 'ABD' ? 'bg-[#002B5B33]' : ''}`}>Associate Bachelor’s Degree</p>
                <p onClick={() => setPrograms('EMP')} className={`p-[10px] cursor-pointer w-full text-center rounded-[10px] ${programs === 'EMP' ? 'bg-[#002B5B33]' : ''}`}>Executive MBA Program</p>
                <p onClick={() => setPrograms('EDP')} className={`p-[10px] cursor-pointer w-full text-center rounded-[10px] ${programs === 'EDP' ? 'bg-[#002B5B33]' : ''}`}>Executive Diploma Program</p>
                <p onClick={() => setPrograms('PC')} className={`p-[10px] cursor-pointer w-full text-center rounded-[10px] ${programs === 'PC' ? 'bg-[#002B5B33]' : ''}`}>Professional Certificates</p>
            </div>
            <div className='mt-5 grid grid-cols-2'>
                <div>
                    <p className='text-[32px] font-medium'>Program Overview</p>
                    <p className='text-[18px] font-normal mt-3'>
                        Our Associate Bachelor’s Degree program equips you with the knowledge and skills to thrive in a rapidly evolving world. Taught by world-class professors and lecturers, the curriculum is designed to instill key values, strategic thinking, and problem-solving skills essential for tackling modern management challenges.
                    </p>
                    <div className='mt-8 relative'>
                        <div className='relative'>
                            <img className='absolute z-20 right-[35%] h-full -translate-x-[35%]' src={VL} alt="" />
                            <img className='absolute z-20 left-[30%] h-full -translate-x-[30%]' src={VL} alt="" />
                            <img className='absolute z-20 top-1/2 -translate-y-1/2' src={HL} alt="" />
                            <div className=' grid grid-cols-3 gap-3 z-10 relative mt-3'>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='text-[36px]'>🌐</p>
                                    <p className='text-[20px] font-normal'>Globally Recognized Degree</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='text-[36px]'>💻</p>
                                    <p className='text-[20px] font-normal'>Study <br /> Anywhere, <br /> Anytime</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='text-[36px]'>🎓</p>
                                    <p className='text-[20px] font-normal'>Qualifies for Postgraduate Studies</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <img src={nysc} alt="" />
                                    <p className='text-[20px] font-normal'>Meets National Service Requirements</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='text-[36px]'>📜</p>
                                    <p className='text-[20px] font-normal'>Enroll with <br /> just your <br /> SSCE</p>
                                </div>
                                <div className='bg-white rounded-[10px] p-2'>
                                    <p className='text-[36px]'>🏅</p>
                                    <p className='text-[20px] font-normal'>World Class Educational Quality</p>
                                </div>
                            </div>
                        </div>
                        <button className='py-[10px] px-9 rounded-[15px] flex items-center mt-10 gap-2 shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>
                            Explore Courses
                            <HiMiniArrowRight className='mt-1' />
                        </button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={behindMan} className='w-[400px] absolute bottom-10 left-1/2 -translate-x-1/2 h-[301px]' alt="" />
                    <img src={Man} className='w-[670px] h-[450px] z-30 absolute bottom-14' alt="" />
                    <p className='bg-[#002B5BA6] text-white text-[18px] font-normal rounded-2xl shadow-lg shadow-[#00000040] py-5 px-2 w-auto absolute bottom-[335px] right-[-30px]'>
                        ✅ 85% Employment Rate
                    </p>
                    <p className='bg-[#ffffff] text-black flex items-center text-[18px] font-normal rounded-2xl shadow-lg shadow-[#00000040] py-3 px-2 w-auto absolute bottom-[55px] z-50 border border-[#79797977] right-5'>
                        <span className='text-[30px]'>🌍</span> Students from 30+ Countries
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProgramsDesignedForYou