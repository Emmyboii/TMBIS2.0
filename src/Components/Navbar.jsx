import { useEffect, useState } from 'react';
import Logo from '../Images/Logo.png'
import pro1 from '../Images/program1.png'
import pro2 from '../Images/program2.png'
import pro3 from '../Images/program3.png'
import pro4 from '../Images/program4.png'
import pro5 from '../Images/program5.png'
import pro6 from '../Images/program6.png'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [programs, setPrograms] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const [smScreens, setSmScreens] = useState(window.innerWidth < 500)

  useEffect(() => {
    const handleResize = () => {
      setSmScreens(window.innerWidth > 900)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [smScreens])

  return (
    <div className='flex items-center justify-between xl:px-20 mc:px-2 sa:px-10 px-4 py-3 border-b-[0.5px] border-[#797979B2]'>
      <Link to='/'>
        <img className='w-32' src={Logo} alt="" />
      </Link>
      <div className='mc:flex hidden items-center gap-6 ml-[120px] xl:text-[14px] text-xs font-normal'>
        <Link to='/'>
          <p className='flex gap-[5px] items-center'>
            HOME
            <HiMiniArrowUpRight />
          </p>
        </Link>
        <div
          onMouseEnter={() => setPrograms(true)}
        >
          <p className='flex gap-[5px] cursor-pointer items-center'>
            PROGRAMS
            <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${programs ? 'rotate-180' : ''}`} />
          </p>

          {programs && (
            <div
              onMouseLeave={() => setPrograms(false)}
              className='bg-white shadow-lg px-[150px] absolute left-0 w-full z-50 grid grid-cols-3 gap-y-7 gap-x-4 top-[88px] p-5 border border-gray-200'>
              <Link onClick={() => setPrograms(false)} to='/associate-bachelor-degree' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro1} alt="" />
                  <p className='py-2'>Associate Bachelor's Degree</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-mba' className='hover:text-blue-600 transition'>
                <div className='bg-blac'>
                  <img className='h-[210px] object-cover w-full' src={pro2} alt="" />
                  <p className='py-2'>Executive MBA</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro3} alt="" />
                  <p className='py-2'>Executive Advanced Diploma</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/mini-mba' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro4} alt="" />
                  <p className='py-2'>Executive Mini MBA</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/professional-courses' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro5} alt="" />
                  <p className='py-2'>Professional Courses</p>
                </div>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-diploma' className='hover:text-blue-600 transition'>
                <div>
                  <img className='h-[210px] object-cover w-full' src={pro6} alt="" />
                  <p className='py-2'>Executive Diploma</p>
                </div>
              </Link>

            </div>
          )}
        </div>

        <Link to='/articles'>
        <p className='flex gap-[5px] items-center'>
          ARTICLES
          <HiMiniArrowUpRight />
        </p>
        </Link>
        <Link to='/about'>
        <p className='flex gap-[5px] items-center'>
          ABOUT US
          <HiMiniArrowUpRight />
        </p>
        </Link>
      </div>
      <div className='text-[12px] font-normal mc:flex hidden gap-3'>
        <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>APPLY NOW</button>
        <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>EXPLORE PROGRAMS</button>
      </div>

      <MdMenu onClick={() => setOpenMenu(!openMenu)} className='cursor-pointer sa:text-[30px] text-2xl mc:hidden block' />

      <div className={`absolute sa:top-[87px] top-16 left-0 z-50 sa:p-7 p-4 flex mc:hidden flex-col gap-6 bg-white transition-all duration-300 w-full ${openMenu ? 'h-[405px] opacity-100' : 'h-0 opacity-0'}`}>
        <div className='flex flex-col items-start gap-6 xl:text-[14px] text-xs font-normal'>
          <Link to='/'>
            <p onClick={() => setOpenMenu(false)} className='flex gap-[5px] items-center'>
              HOME
              <HiMiniArrowUpRight />
            </p>
          </Link> <hr className='border w-full border-black/40' />
          <div
            onMouseEnter={() => {
              if (!smScreens) {
                setPrograms(true)
              }
            }}
            onMouseLeave={() => {
              if (!smScreens) {
                setPrograms(false)
              }
            }}
          >
            <p onClick={() => {
              if (smScreens) {
                setPrograms(!programs)
              } else {
                setOpenMenu(false)
              }
            }}
              className='flex gap-[5px] cursor-pointer items-center'>
              PROGRAMS
              <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${programs ? 'rotate-180' : ''}`} />
            </p>

            {programs && (
              <div
                className='bg-white shadow-lg absolute left-0 w-full z-50 grid md:grid-cols-3 grid-cols-2 gap-y-7 gap-x-4 top-32 p-5 border border-gray-200'>
                <Link onClick={() => setPrograms(false)} to='/associate-bachelor-degree' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro1} alt="" />
                    <p className='py-2'>Associate Bachelor's Degree</p>
                  </div>
                </Link>

                <Link onClick={() => setPrograms(false)} to='/executive-mba' className='hover:text-blue-600 transition'>
                  <div className='bg-blac'>
                    <img className='h-[210px] object-cover w-full' src={pro2} alt="" />
                    <p className='py-2'>Executive MBA</p>
                  </div>
                </Link>

                <Link onClick={() => setPrograms(false)} to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro3} alt="" />
                    <p className='py-2'>Executive Advanced Diploma</p>
                  </div>
                </Link>

                <Link onClick={() => setPrograms(false)} to='/mini-mba' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro4} alt="" />
                    <p className='py-2'>Executive Mini MBA</p>
                  </div>
                </Link>

                <Link onClick={() => setPrograms(false)} to='/professional-courses' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro5} alt="" />
                    <p className='py-2'>Professional Courses</p>
                  </div>
                </Link>

                <Link onClick={() => setPrograms(false)} to='/executive-diploma' className='hover:text-blue-600 transition'>
                  <div>
                    <img className='h-[210px] object-cover w-full' src={pro6} alt="" />
                    <p className='py-2'>Executive Diploma</p>
                  </div>
                </Link>

              </div>
            )}
          </div> <hr className='border w-full border-black/40' />

          {/* <Link to='/admission'> */}
          <p onClick={() => setOpenMenu(false)} className='flex gap-[5px] items-center'>
            ARTICLES
            <MdOutlineKeyboardArrowDown />
          </p> <hr className='border w-full border-black/40' />
          {/* </Link> */}
          {/* <Link to='/about'> */}
          <p onClick={() => setOpenMenu(false)} className='flex gap-[5px] items-center'>
            ABOUT US
            <HiMiniArrowUpRight />
          </p> <hr className='border w-full border-black/40' />
          {/* </Link> */}
        </div>
        <div className='text-[12px] font-normal flex flex-col gap-3'>
          <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>APPLY NOW</button>
          <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>EXPLORE PROGRAMS</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar