import { HiMiniArrowRight } from 'react-icons/hi2'
import PUDD from '../Images/PUDD.png'
import PUDD2 from '../Images/PUDD2.png'
import PUDD3 from '../Images/PUDD3.png'
import PUDD4 from '../Images/PUDD4.png'

const FeaturedArticles = () => {
    return (
        <div className='px-24 bg-[#002B5B] py-8 text-white'>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='font-bold text-[45px]'>Featured Articles</p>
                    <p className='font-normal text-lg'>Stay connected with the latest business insights, research <br />findings, and success stories from our students, and alumni network.</p>
                    <button className='flex items-center underline mt-7 font-medium gap-2'>
                        Browse Featured Articles
                        <HiMiniArrowRight className='mt-1' />
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10 mt-8'>
                <div>
                    <img src={PUDD} alt="" />
                    <p className='text-[34px] font-medium'>The Future of Swiss Business Leadership in a Digital Age</p>
                    <div className='flex justify-between mt-4 w-full'>
                        <p className='font-extralight text-base'>Prof. Dr. Sarah Chen</p>
                        <p className='font-extralight text-base'>8 mins read.</p>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 gap-5 border-t pt-8 pb-5'>
                        <div className='flex flex-col gap-1 col-span-2'>
                            <p className='text-[#C0943E] font-semibold'>Alumni Stories</p>
                            <p className='font-semibold text-[20px]'>From Classroom to Boardroom: Alumni Success Stories</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-extralight text-base'>Elena Vasquez</p>
                                <p className='font-extralight text-base'>5 mins read.</p>
                            </div>
                        </div>
                        <img className='w-full object-cover h-[110px]' src={PUDD2} alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-5 border-t pt-8 pb-5'>
                        <div className='flex flex-col gap-1 col-span-2'>
                            <p className='text-[#C0943E] font-semibold'>Case Studies</p>
                            <p className='font-semibold text-[20px]'>Strategic Transformation at a Fortune 500 Company</p>
                            <div className='flex justify-between w-full'>
                                <p className='font-extralight text-base'>Marcus Weber</p>
                                <p className='font-extralight text-base'>5 mins read.</p>
                            </div>
                        </div>
                        <img className='w-full object-cover h-[110px]' src={PUDD3} alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-5 border-t pt-8 pb-5'>
                        <div className='flex flex-col gap-1 col-span-2'>
                            <p className='text-[#C0943E] font-semibold'>Business Strategy</p>
                            <p className='font-semibold text-[20px]'>The Nestlé Playbook: Strategic Lessons of Global Business </p>
                            <div className='flex justify-between w-full'>
                                <p className='font-extralight text-base'>Dominic Straws</p>
                                <p className='font-extralight text-base'>5 mins read.</p>
                            </div>
                        </div>
                        <img className='w-full object-cover h-[110px]' src={PUDD4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedArticles