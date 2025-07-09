import hero from '../Images/hero.webp'

const HomeHero2 = () => {
    return (
        <div>
            <div className='relative'>
                <img className='h-screen w-full object-cover' src={hero} alt="" />
                <div
                    className='w-[63%] h-screen absolute top-0'
                    style={{
                        background: 'linear-gradient(to right, #005BC1, #005BC199)',
                        WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                        maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                    }}
                ></div>
                <div className='absolute text-white bg-[#fff4f4 max-w-[62%] left-20 top-20'>
                    <p className='text-[60px] leading-[73px] font-semibold'>Business Education for Ambitious Professionals Worldwide</p>
                    <p className='text-[20px] font-normal mt-5'>Join the elite ranks of global business leaders through our <br /> world-class programs</p>
                    <button className='py-3 px-[30px] mt-20 rounded-full bg-white text-[#005BC1] text-[18px] font-medium'>Enroll Now</button>
                </div>
            </div>
        </div>
    )
}

export default HomeHero2