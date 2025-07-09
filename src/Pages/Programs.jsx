import { HiMiniArrowRight } from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'
import ProgramDetails from '../Components/ProgramDetails';
import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Programs = ({setOpenCart}) => {

    const { pathname } = useLocation();
    const [viewAll, setViewAll] = useState(false);

    const currentProgram = ProgramDetails.find(p => p.path === pathname);
    const [programData, setProgramData] = useState(() => {
        const storedPrograms = localStorage.getItem('programsData')
        return storedPrograms ? JSON.parse(storedPrograms) : currentProgram
    });

    if (!programData) {
        return <p className='text-center text-red-500 my-10'>Program not found for path: {pathname}</p>;
    }

    const { heroImg, heroBigText, heroSmallText, label, programDetails } = currentProgram;

    const handleAddToCart = (projectPath) => {
        const stored = localStorage.getItem('programsData');
        let allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

        const updatedPrograms = allPrograms.map(category => {
            const updatedDetails = category.programDetails.map(program => {
                if (program.projectPath === projectPath) {
                    return { ...program, addToCart: true };
                }
                return program;
            });
            return { ...category, programDetails: updatedDetails };
        });

        // Update localStorage
        localStorage.setItem('programsData', JSON.stringify(updatedPrograms));
        setProgramData(updatedPrograms);

        window.dispatchEvent(
            new StorageEvent('storage', {
                key: 'programsData',
                newValue: JSON.stringify(updatedPrograms),
            })
        );

        setOpenCart(true)
    };

    return (
        <div>
            <div className='flex flex-col gap-8'>
                <div className='relative'>
                    <img className='h-screen w-full object-cover' src={heroImg} alt="" />
                    <div
                        className='w-[63%] h-screen absolute top-0'
                        style={{
                            background: 'linear-gradient(to right, #005BC1, #005BC199)',
                            WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                            maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                        }}
                    ></div>
                    <div className='absolute text-white bg-[#fff4f4 max-w-[62%] left-20 top-20'>
                        <p className='text-[60px] leading-[73px] font-semibold max-w-[750px]'>{heroBigText}</p>
                        <p className='text-[20px] font-normal mt-5 max-w-[540px]'>{heroSmallText}</p>
                        <button className='py-3 px-[30px] mt-14 rounded-full bg-white text-[#005BC1] text-[18px] font-medium'>
                            {pathname === '/executive-diploma' || pathname === '/professional-courses' ? (
                                <p>Start Learning Today</p>
                            ) : (
                                <p>Enroll Now</p>
                            )}
                        </button>
                    </div>
                </div>
                <div className='pb-20 flex flex-col gap-8'>
                    <p className='text-[30px] font-semibold text-center'>{label}</p>
                    <div className='grid grid-cols-3 gap-x-3 gap-y-7 px-24'>
                        {(viewAll ? programDetails : programDetails.slice(0, 12)).map(
                            ({ programImg, programLabel, programText, programPrice, projectPath }) => (
                                <div key={programLabel} className='bg-[#002B5B26] border-[0.5px] flex flex-col gap-1 border-[#002B5B40] shadow-md rounded-[10px] p-3 justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <Link onClick={() => window.scrollTo(0, 0)} to={projectPath}>
                                            <img className='w-full h-[170px] rounded-[10px] hover:scale-105 transition-all duration-700 object-cover' src={programImg} alt="" />
                                        </Link>
                                        <p className='text-[20px] font-semibold'>{programLabel}</p>
                                        <p className='text-[17px] font-normal'>{programText}</p>
                                    </div>
                                    <div className='flex justify-between mt-7 mb-3'>
                                        <p className='font-medium text-2xl'>€{programPrice}</p>
                                        <button
                                            onClick={() => {
                                                handleAddToCart(projectPath);
                                                window.dispatchEvent(new Event('cartUpdated')); // Trigger cart to update
                                            }}
                                            className='flex items-center  text-white bg-[#002B5B] rounded-[5px] p-2 font-semibold gap-2'>
                                            Enroll Now
                                            <HiMiniArrowRight className='mt-1' />
                                        </button>

                                    </div>
                                </div>
                            ))}
                    </div>
                    {programDetails.length > 12 && (
                        <div className='text-center mt-6'>
                            <button
                                onClick={() => setViewAll(!viewAll)}
                                className='flex items-center gap-3 bg-[#002B5B] px-6 py-2 rounded-full font-medium text-white mx-auto transition duration-300'
                            >
                                {viewAll ? 'View Less Courses' : 'View More Courses'}
                                <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${viewAll ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Programs