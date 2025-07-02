import bgFrame from '../Images/bgFrame.svg'
import HomeHero from '../Components/HomeHero'
import Why from '../Components/Why'
import ProgramsDesignedForYou from '../Components/ProgramsDesignedForYou'
import LearningBenefit from '../Components/LearningBenefit'

const Home = () => {
  return (
    <div className='py-14'>
      <img className='absolute z-0 top-[60%]' src={bgFrame} alt="" />
      {/* <img className='absolute z-0 top-[105%]' src={bgFrame} alt="" /> */}
      <div className='relative z-10 flex flex-col gap-20'>
        <HomeHero />
        <div className='max-w-[950px] mx-auto'>
          <Why />
        </div>
        <ProgramsDesignedForYou />
        <LearningBenefit />
      </div>
    </div>
  )
}

export default Home