import mission from '../Images/mission.png'
import vision from '../Images/vision.png'
import promise from '../Images/promise.png'

const MissonVison = () => {
    return (
        <div className='px-24 flex items-center gap-3 mt-10'>
            <div className='border border-[#CCCCCC] p-3 w-[90%]'>
                <div className='flex items-center gap-2'>
                    <img className='size-[40px]' src={mission} alt="" />
                    <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold text-[29px]'>Our Mission</p>
                </div>
                <p className='mt-2 sm:text-lg text-base'>To democratize high-quality business education for all.</p>
            </div>
            <div className='border border-[#CCCCCC] p-3 w-full'>
                <div className='flex items-center gap-2'>
                    <img className='size-[40px]' src={vision} alt="" />
                    <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold text-[29px]'>Our Vision</p>
                </div>
                <p className='mt-2 sm:text-lg text-base'>To be the global platform for accessible business leadership training.</p>
            </div>
            <div className='border border-[#CCCCCC] p-3 w-[90%]'>
                <div className='flex items-center gap-2'>
                    <img className='size-[40px]' src={promise} alt="" />
                    <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-semibold text-[29px]'>Our Promise</p>
                </div>
                <p className='mt-2 sm:text-lg text-base'>Flexible learning, Affordable and Career-focused.</p>
            </div>
        </div>
    )
}

export default MissonVison