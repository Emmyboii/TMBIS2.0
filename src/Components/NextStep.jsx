import { TiTimes } from "react-icons/ti";
import halfCircle from '../Images/halfCircle.png'
import Rec1 from '../Images/Rec1.png'
import Rec2 from '../Images/Rec2.png'
import Rec3 from '../Images/Rec3.png'
import Rec4 from '../Images/Rec4.png'
import Rec5 from '../Images/Rec5.png'

const NextStep = () => {
    return (
        <div className="xl:px-24 sh:pl-16 sh:pr-10 sp:px-7 px-2 flex flex-col gap-80 pb-9">
            <div className="flex flex-col gap-4">
                <p className='text-[#ffffff] bg-gradient-to-r from-[#002B5B] to-[#005BC1] bg-clip-text text-transparent sd:text-start text-center sp:text-[30px] sr:text-[24px] text-[19px] sd:text-[40px] font-semibold'>International Recognition</p>
                <div className="grid sm:grid-cols-5 grid-cols-3 w-full gap-y-6 justify-items-center">
                    <img className="xl:w-[200px] sp:w-[130px] w-[90px] xl:h-[80px] sp:h-[60px] h-[40px]" src={Rec1} alt="" />
                    <img className="xl:w-[200px] sp:w-[130px] w-[90px] xl:h-[80px] sp:h-[60px] h-[40px]" src={Rec2} alt="" />
                    <img className="xl:w-[200px] sp:w-[130px] w-[90px] xl:h-[80px] sp:h-[80px] h-[60px]" src={Rec3} alt="" />
                    <img className="xl:w-[200px] w-[130px] xl:h-[80px] h-[60px] sm:block hidden justify-self-center" src={Rec4} alt="" />
                    <img className="xl:w-[200px] w-[130px] xl:h-[80px] h-[60px] sm:block hidden justify-self-center" src={Rec5} alt="" />
                    <div className="col-span-3 flex justify-center items-start gap-7 sm:hidden">
                        <img className="sp:w-[130px] w-[90px] mt-5 sp:h-[60px] h-[40px]" src={Rec4} alt="" />
                        <img className="sp:w-[130px] w-[90px] sp:h-[60px] h-[40px]" src={Rec5} alt="" />
                    </div>
                </div>

            </div>
            <div className='sa:min-h-[306px] sk:min-h-[250px] min-h-[230px] relative flex items-center bg-gradient-to-r from-[#002B5B] to-[#005BC1] rounded-[10px] border border-white'>
                <img src={halfCircle} className="absolute size-[100px] top-0" alt="" />
                <img src={halfCircle} className="absolute size-[100px] bottom-0 right-0 rotate-180" alt="" />
                <div className='absolute flex flex-col w-full gap-5 overflow-hidden'>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex px-8 text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                    <div className="flex text-white/60 opacity-40 justify-between items-center">
                        <TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes /><TiTimes />
                    </div>
                </div>
                <div className="text-white flex flex-col items-center justify-center text-center h-full mc:px-32 sa:px-7 px-2">
                    <p className="mh:text-[38px] sd:text-[28px] sk:text-[22px] text-lg font-semibold">Take the Next Step Towards your Future</p>
                    <p className="mh:text-[18px] mt-3 sk:text-[14px] text-xs font-medium">Unlock new opportunities with a globally recognized program. Gain the skills, flexibility, and support you need to succeed.</p>
                    <div className="flex gap-5 mt-5">
                        <button className="rounded-[10px] bg-white sm:p-4 p-2 sm:text-base text-sm px-7 shadow-xl shadow-[#C0943E40] text-[#C0943E] font-semibold">Apply Now</button>
                        <button className="rounded-[10px] bg-white sm:p-4 p-2 sm:text-base text-sm shadow-xl shadow-[#C0943E40] text-[#C0943E] font-semibold">Speak to an Advisor</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextStep