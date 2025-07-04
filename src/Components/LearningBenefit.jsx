import graduate from '../Images/graduate2.svg';
import graduateImg from '../Images/graduateImg.svg';
import timeImg from '../Images/TimeImg.svg';
import scaleImg from '../Images/scaleImg.svg';
import Ellipse1 from '../Images/Ellipse 1.svg';
import Ellipse2 from '../Images/Ellipse 2.svg';
import time from '../Images/time.svg';
import scale from '../Images/scale.svg';
import learningFrame from '../Images/learningFrame.svg';
import { HiMiniArrowRight } from 'react-icons/hi2';

const LearningBenefit = () => {
    return (
        <div className=''>
            <p className='text-[#ffffff] px-[150px] mx-auto bg-gradient-to-r from-[#002B5B] via-[#00438E] via-[#004FA7] to-[#005BC1] bg-clip-text text-transparent text-[40px] font-bold'>Our Learning Benefits</p>
            <img src={learningFrame} className='absolute z-0' alt="" />
            <div className='mt-4 grid px-[150px] grid-cols-3 gap-3'>
                <div className='border-[#797979B2] relative flex flex-col gap-2 border bg-white shadow-lg shadow-[#00000040] rounded-[10px] pt-14'>
                    <img className='size-[50px] pl-4' src={time} alt="" />
                    <p className='text-[20px] pl-4 font-semibold'>Learn at Your Own Pace</p>
                    <p className='text-[18px] pl-4 font-normal pr-7'>Your schedule, your rules. Study when it’s most convenient for you—no fixed deadlines, just progress at your speed.</p>
                    <button className='flex items-center font-semibold gap-2 pl-4 text-[#C0943E]'>
                        Learn more
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={timeImg} className='h-[280px] absolute bottom-0 right-0 z-40' alt="" />
                    <img src={Ellipse1} className='mt-[74px]' alt="" />
                </div>
                <div className='border-[#797979B2] relative flex flex-col gap-2 border bg-[#694500] text-white shadow-lg shadow-[#00000040] rounded-[10px] pl-4 pt-14'>
                    <img className='size-[40px]' src={graduate} alt="" />
                    <p className='text-[20px] font-semibold'>100% Online Learning</p>
                    <p className='text-[18px] font-normal pr-7'>Access all courses from any device, anywhere. Learn seamlessly from the comfort of your home or even on the go.</p>
                    <button className='flex items-center font-semibold gap-2'>
                        Explore Programs
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={graduateImg} className='w-[307px bottom-0 rounded-[10px] left-0 absolute z-40' alt="" />
                    <img src={Ellipse2} className='absolute right-[-34%] top-[-24%]' alt="" />
                </div>
                <div className='border-[#797979B2] relative flex flex-col gap-2 border bg-gradient-to-b from-[#C0943E33] via-[#C0943E33] to-[#FFFFFF] shadow-lg shadow-[#00000040] rounded-[10px] pl-4 pt-14'>
                    <img className='size-[40px]' src={scale} alt="" />
                    <p className='text-[20px] font-semibold'>Fast-Track Your Success</p>
                    <p className='text-[18px] font-normal pr-7'>Designed for efficiency! Complete your program faster with expert guidance and flexible study durations.</p>
                    <button className='flex items-center font-semibold gap-2'>
                        Learn more
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                    <img src={scaleImg} className='h-[250px] z-40' alt="" />
                </div>
            </div>
            <button className='py-[10px] px-9 rounded-[15px] flex items-center justify-center mx-auto mt-10 gap-2 shadow-md shadow-[#FFFFFF40] border-2 border-[#FFFFFF] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>
                Start your Learning Journey
                <HiMiniArrowRight className='mt-1' />
            </button>
        </div>
    )
}

export default LearningBenefit