import graduate from '../Images/graduate2.svg';
import graduateImg from '../Images/graduateImg.svg';
import timeImg from '../Images/TimeImg.svg';
import scaleImg from '../Images/scaleImg.svg';
import Ellipse1 from '../Images/Ellipse 1.png';
// import Ellipse2 from '../Images/Ellipse 2.svg';
import time from '../Images/time.svg';
import scale from '../Images/scale.png';
// import learningFrame from '../Images/learningFrame.svg';
import { HiMiniArrowRight } from 'react-icons/hi2';

const LearningBenefit = () => {
    return (
        <div className='px-24'>
            <p className='text-[#ffffff] bg-gradient-to-r from-[#002B5B] via-[#00438E] via-[#004FA7] to-[#005BC1] bg-clip-text text-transparent text-[40px] font-bold'>Our Learning Benefits</p>
            <div className='mt-4 grid grid-cols-3 gap-3'>
                <div className='border-[#797979B2] relative flex flex-col gap-2 border bg-white shadow-lg shadow-[#00000040] rounded-[10px] pt-6'>
                    <img className='size-[50px] pl-3' src={time} alt="" />
                    <p className='text-[20px] pl-3 font-semibold'>Learn at Your Own Pace</p>
                    <p className='text-[16px] pl-3 font-normal pr-7'>Your schedule, your rules. Study when it’s most convenient for you—no fixed deadlines, just progress at your speed.</p>
                    <button className='flex items-center font-semibold gap-2 pl-3 text-[#005BC1]'>
                        Learn more
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={timeImg} className='h-[280px] absolute bottom-0 right-0 z-40' alt="" />
                    <img src={Ellipse1} className='mt-[74px]' alt="" />
                </div>
                <div className='border-[#797979B2] relative flex flex-col gap-2 border bg-[#002B5B] text-white shadow-lg shadow-[#00000040] rounded-[10px] pl-3 pt-6'>
                    <img className='size-[40px]' src={graduate} alt="" />
                    <p className='text-[20px] font-semibold'>100% Online Learning</p>
                    <p className='text-[16px] font-normal pr-7'>Access all courses from any device, anywhere. Learn seamlessly from the comfort of your home or even on the go.</p>
                    <button className='flex items-center font-semibold gap-2'>
                        Explore Programs
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={graduateImg} className='w-[307px bottom-0 rounded-[10px] left-0 absolute z-40' alt="" />
                </div>
                <div className='border-[#797979B2] relative flex flex-col gap-2 border bg-gradient-to-b from-[#002B5BBF] via-[#002B5BBF] text-white to-[#FFFFFF] shadow-lg shadow-[#00000040] rounded-[10px] pl-3 pt-6'>
                    <img className='size-[40px]' src={scale} alt="" />
                    <p className='text-[20px] font-semibold'>Fast-Track Your Success</p>
                    <p className='text-[16px] font-normal pr-7'>Designed for efficiency! Complete your program faster with expert guidance and flexible study durations.</p>
                    <button className='flex items-center font-semibold gap-2'>
                        Learn more
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={scaleImg} className='h-[330px] absolute bottom-0 right-5 z-40' alt="" />
                </div>
            </div>
            <button className='py-[10px] px-9 rounded-[15px] flex items-center justify-center mx-auto mt-10 gap-2 shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>
                Start your Learning Journey
                <HiMiniArrowRight className='mt-1' />
            </button>
        </div>
    )
}

export default LearningBenefit