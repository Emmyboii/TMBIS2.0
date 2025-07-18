import different1 from '../Images/different1.png'
import different2 from '../Images/different2.png'
import different3 from '../Images/different3.png'

const Different = () => {
    return (
        <div className='px-24'>
            <p className='bg-gradient-to-r from-[#002B5B] to-[#005BC1] text-transparent bg-clip-text font-bold sm:text-[35px] text-[28.4px]'>What makes TMBI different...</p>
            <div className='flex mt-6'>
                <div className='w-[500px] h-[470px] bg-[#C0943E40] px-5 py-16 relative'>
                    <p className='text-3xl font-semibold'>Learn from Anywhere</p>
                    <p className='text-base mt-3 font-normal text-center'>Obtain an international degree without leaving your country.</p>
                    <img src={different1} className='absolute bottom-0 w-[220px] left-1/2 -translate-x-1/2' alt="" />
                </div>
                <div className='w-[500px] h-[470px] bg-[#002B5B] text-white px-5 py-16 relative'>
                    <p className='text-3xl font-semibold'>Master Business Skills</p>
                    <p className='text-base mt-3 font-normal text-center'>Complete several modules ranging from Business Leadership and Managing People.</p>
                    <img src={different2} className='absolute bottom-0 w-[220px] left-1/2 -translate-x-1/2' alt="" />
                </div>
                <div className='w-[500px] h-[470px] bg-[#C0943E40] px-5 py-16 relative'>
                    <p className='text-3xl font-semibold'>Get your Degree</p>
                    <p className='text-base mt-3 font-normal text-center'>You will recieve a degree certificate from TMBI and the partner universities</p>
                    <img src={different3} className='absolute bottom-0 w-[220px] left-1/2 -translate-x-1/2' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Different