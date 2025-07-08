import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-gradient-to-r flex flex-col gap-16 from-[#002B5B] to-[#005BC1] pt-14 pb-7 text-white px-24'>
            <div className="flex justify-between items-center">
                <p className='text-[28px] font-semibold'>"Empowering future leaders with world-class business <br />education—flexible, accessible, and globally recognized."</p>
                <div className='flex items-center justify-center mt-12 text-[25px] gap-4'>
                    <a href="https://ng.linkedin.com/company/tmbis-ng-trs" rel='noreferrer' target='_blank' className='underline'>
                        <FaLinkedin />
                    </a>
                    <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank' className='underline'>
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/thronemanagementand_business/" rel='noreferrer' target='_blank' className='underline'>
                        <FaInstagram />
                    </a>
                    <a href="https://web.facebook.com/thronemanagement" rel='noreferrer' target='_blank' className='underline'>
                        <FaFacebook />
                    </a>
                </div>
            </div>
            <div className="flex gap-32">
                <div className="flex flex-col gap-6">
                    <p className="uppercase text-[20px] font-normal">Quick Links</p>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">PROGRAMS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">ADMISSIONS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">WHY CHOOSE US</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">TESTIMONIALS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">CONTACT US</p>
                    </Link>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="uppercase text-[20px] font-normal">resources</p>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">COURSES</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">CERTIFICATIONS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">DEGREES</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">SCHOLARSHIPS</p>
                    </Link>
                    <Link to='' className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">ACCREDITATIONS</p>
                    </Link>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="uppercase text-[20px] font-normal">contact us</p>
                    <div className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base uppercase">SWITZERLAND OFFICE: Via Vigizzi 98, <br /> Unterlangenegg 3614, Switzerland</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">EMAIL: <Link target="_blank" to='mailto:info@thronebusinessinstituteswitzerland.com' className="underline">info@thronebusinessinstituteswitzerland.com</Link></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuArrowUpRight className="text-[#C0943E]" />
                        <p className="text-base">PHONE: <Link to='tel: +2349134942707' target="_blank" className="underline">+234 913 494 2707</Link></p>
                    </div>
                </div>
            </div>

            <div>
                <hr className="border-[#ffffffbf]" />
                <div className="flex gap-3 mt-4 mx-auto text-center justify-center">
                    <p className="uppercase flex gap-2 items-center border-r pr-3 border-white ">
                        <FaRegCopyright />
                        copyright 2025 all rights reserved</p>
                    <p className="text-[#C0943E] font-normal">TBMI</p>
                </div>
            </div>
        </div>
    )
}

export default Footer