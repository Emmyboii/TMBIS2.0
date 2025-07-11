import { useState } from 'react';
import Logo from '../Images/Logo.svg'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [programs, setPrograms] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='flex items-center justify-between xl:px-20 mc:px-2 sa:px-10 px-4 py-3 border-b-[0.5px] border-[#797979B2]'>
      <Link to='/'>
        <img className='sa:w-auto w-24' src={Logo} alt="" />
      </Link>
      <div className='mc:flex hidden items-center gap-6 ml-[120px] xl:text-[14px] text-xs font-normal'>
        <Link to='/'>
          <p className='flex gap-[5px] items-center'>
            HOME
            <HiMiniArrowUpRight />
          </p>
        </Link>
        <div
          className='relative'
          onMouseEnter={() => setPrograms(true)}
          onMouseLeave={() => setPrograms(false)} // change from onMouseUp
        >
          <p className='flex gap-[5px] cursor-pointer items-center'>
            PROGRAMS
            <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${programs ? 'rotate-180' : ''}`} />
          </p>

          {programs && (
            <div
              className='bg-white shadow-lg absolute w-[240px] z-50 flex -left-[80%] flex-col gap-3 p-5 top-[53px rounded-lg border border-gray-200'>
              <Link onClick={() => setPrograms(false)} to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                <p className='py-2'>Executive Advanced Diploma</p>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/executive-diploma' className='hover:text-blue-600 transition'>
                <p className='py-2'>Executive Diploma</p>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/professional-courses' className='hover:text-blue-600 transition'>
                <p className='py-2'>Professional Courses</p>
              </Link>

              <Link onClick={() => setPrograms(false)} to='/mini-mba' className='hover:text-blue-600 transition'>
                <p className='py-2'>Executive Mini MBA</p>
              </Link>
            </div>
          )}
        </div>

        {/* <Link to='/admission'> */}
        <p className='flex gap-[5px] items-center'>
          ADMISSIONS
          <MdOutlineKeyboardArrowDown />
        </p>
        {/* </Link> */}
        {/* <Link to='/about'> */}
        <p className='flex gap-[5px] items-center'>
          ABOUT US
          <HiMiniArrowUpRight />
        </p>
        {/* </Link> */}
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
            className='relative'
            onMouseEnter={() => setPrograms(true)}
            onMouseLeave={() => setPrograms(false)} // change from onMouseUp
          >
            <p onClick={() => setOpenMenu(false)} className='flex gap-[5px] cursor-pointer items-center'>
              PROGRAMS
              <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${programs ? 'rotate-180' : ''}`} />
            </p>

            {programs && (
              <div
                className='bg-white shadow-lg absolute w-[240px] z-50 flex flex-col gap-3 p-5 top-[53px rounded-lg border border-gray-200'>
                <Link onClick={() => setOpenMenu(false)} to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                  <p className='py-2'>Executive Advanced Diploma</p>
                </Link>

                <Link onClick={() => setOpenMenu(false)} to='/executive-diploma' className='hover:text-blue-600 transition'>
                  <p className='py-2'>Executive Diploma</p>
                </Link>

                <Link onClick={() => setOpenMenu(false)} to='/professional-courses' className='hover:text-blue-600 transition'>
                  <p className='py-2'>Professional Courses</p>
                </Link>

                <Link onClick={() => setOpenMenu(false)} to='/mini-mba' className='hover:text-blue-600 transition'>
                  <p className='py-2'>Executive Mini MBA</p>
                </Link>
              </div>
            )}
          </div> <hr className='border w-full border-black/40' />

          {/* <Link to='/admission'> */}
          <p onClick={() => setOpenMenu(false)} className='flex gap-[5px] items-center'>
            ADMISSIONS
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