import Logo from '../Images/Logo.svg'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-20 py-3 border-b-[0.5px] border-[#797979B2]'>
      <img src={Logo} alt="" />
      <div className='flex items-center gap-6 ml-[120px] text-[14px] font-normal'>
        <Link to='/'>
          <p className='flex gap-[5px] items-center'>
            HOME
            <HiMiniArrowUpRight />
          </p>
        </Link>
        <Link to='/programs'>
          <p className='flex gap-[5px] items-center'>
            PROGRAMS
            <MdOutlineKeyboardArrowDown />
          </p>
        </Link>
        <Link to='/admission'>
          <p className='flex gap-[5px] items-center'>
            ADMISSIONS
            <MdOutlineKeyboardArrowDown />
          </p>
        </Link>
        <Link to='/contact'>
          <p className='flex gap-[5px] items-center'>
            CONTACT
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