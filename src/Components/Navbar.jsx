import { useState } from 'react';
import Logo from '../Images/Logo.svg'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [programs, setPrograms] = useState(false)

  return (
    <div className='flex items-center justify-between xl:px-20 px-2 py-3 border-b-[0.5px] border-[#797979B2]'>
      <img src={Logo} alt="" />
      <div className='flex items-center gap-6 ml-[120px] xl:text-[14px] text-xs font-normal'>
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
              <Link to='/executive-advanced-diploma' className='hover:text-blue-600 transition'>
                <p className='py-2'>Executive Advanced Diploma</p>
              </Link>

              <Link to='/executive-diploma' className='hover:text-blue-600 transition'>
                <p className='py-2'>Executive Diploma</p>
              </Link>

              <Link to='/professional-courses' className='hover:text-blue-600 transition'>
                <p className='py-2'>Professional Courses</p>
              </Link>

              <Link to='/mini-mba' className='hover:text-blue-600 transition'>
                <p className='py-2'>Executive Mini MBA</p>
              </Link>
            </div>
          )}
        </div>

        <Link to='/admission'>
          <p className='flex gap-[5px] items-center'>
            ADMISSIONS
            <MdOutlineKeyboardArrowDown />
          </p>
        </Link>
        <Link to='/about'>
          <p className='flex gap-[5px] items-center'>
            ABOUT US
            <HiMiniArrowUpRight />
          </p>
        </Link>
      </div>
      <div className='text-[12px] font-normal flex gap-3'>
        <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#C0943E] to-[#5A451D]'>APPLY NOW</button>
        <button className='py-[10px] px-3 rounded-[5px] border-2 border-[#FFFFFF80] text-white bg-gradient-to-r from-[#005BC1] to-[#002B5B]'>EXPLORE PROGRAMS</button>
      </div>
    </div>
  )
}

export default Navbar