import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProgramDetails from './ProgramDetails';
import stars from '../Images/stargroup2.png';
import durations from '../Images/duration.png';
import learn from '../Images/learn.png';
import linkedin from '../Images/linkedin.png';
import UDME from '../Images/UDME.png';
import certificates from '../Images/certificate.png';
import CV from '../Images/CV.png';
import line from '../Images/Line.png';
import acc1 from '../Images/acc1.png';
import acc2 from '../Images/acc2.png';
import acc3 from '../Images/acc3.png';
import acc4 from '../Images/acc4.png';
import acc5 from '../Images/acc5.png';

const EachPrograms = ({ setOpenCart }) => {
    const { pathname } = useLocation();

    const [learnAbout, setLearnAbout] = useState('program')

    let currentProgram;
    for (const category of ProgramDetails) {
        currentProgram = category.programDetails.find(program => program.projectPath === pathname);
        if (currentProgram) break;
    }

    const currentPrograms = ProgramDetails.find(category =>
        category.programDetails.some(p => p.projectPath === pathname)
    );

    const [programData, setProgramData] = useState(() => {
        const storedPrograms = localStorage.getItem('programsData');
        return storedPrograms ? JSON.parse(storedPrograms) : currentPrograms;
    });

    if (!programData) {
        return <p className='text-center text-red-500 my-10'>Program not found for path: {pathname}</p>;
    }

    const handleAddToCart = (projectPath) => {
        const stored = localStorage.getItem('programsData');
        let allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

        // Find and update the correct program in the correct category
        const updatedPrograms = allPrograms.map(category => {
            // Only update if this category contains the program
            if (category.programDetails.some(program => program.projectPath === projectPath)) {
                const updatedDetails = category.programDetails.map(program => {
                    if (program.projectPath === projectPath) {
                        return { ...program, addToCart: true };
                    }
                    return program;
                });
                return { ...category, programDetails: updatedDetails };
            }
            return category;
        });

        // Save and update local state
        localStorage.setItem('programsData', JSON.stringify(updatedPrograms));

        // Update the component's local state with the updated program
        const updatedCategory = updatedPrograms.find(category =>
            category.programDetails.some(p => p.projectPath === pathname)
        );
        setProgramData(updatedCategory);

        window.dispatchEvent(
            new StorageEvent('storage', {
                key: 'programsData',
                newValue: JSON.stringify(updatedCategory),
            })
        );
        setOpenCart(true)
    };



    if (!currentProgram) {
        return <p className="text-center mt-20 text-red-600">Program not found.</p>;
    }

    const { programImg, programLabel, programText, projectPath, programPrice, programName, reviews, duration, mode, certificate, note, } = currentProgram;

    return (
        <div className='flex flex-col gap-12'>
            <div className="relative">
                <img className="h-screen w-full object-cover" src={programImg} alt={programLabel} />
                <div
                    className="w-[63%] h-screen absolute top-0"
                    style={{
                        background: 'linear-gradient(to right, #005BC1, #005BC199)',
                        WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                        maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                    }}
                ></div>
                <div className="absolute text-white bg-[#fff4f4 max-w-[62%] left-20 top-20">
                    <p className="text-[20px] text-[#FFC656] font-semibold">{programName}</p>
                    <p className="text-[70px] leading-[73px] font-semibold max-w-[650px]">{programLabel}</p>
                    <p className="text-[22px] font-normal mt-5 max-w-[660px]">{programText}</p>
                    <button
                        onClick={() => {
                            handleAddToCart(projectPath);
                            window.dispatchEvent(new Event('cartUpdated')); // Trigger cart to update
                        }}
                        className="py-3 px-[30px] mt-9 rounded-full bg-white text-[#005BC1] text-[18px] font-normal">
                        <p>Start Course Today for <span className='font-semibold'>€{programPrice}</span></p>
                    </button>
                    <div className='flex mt-7 text-white items-center gap-3'>
                        <img className='w-[160px]' src={stars} alt="" />
                        <p>{reviews}+ Reviews</p>
                    </div>
                    <div className='mt-7 flex gap-14'>
                        <div className='flex items-center gap-3'>
                            <img className='size-[50px]' src={durations} alt="" />
                            <div className='f'>
                                <p className='font-medium text-base'>duration</p>
                                <p className='font-medium text-xl'>{duration}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img className='size-[50px]' src={learn} alt="" />
                            <div>
                                <p className='font-medium text-base'>Flexible Schedule</p>
                                <p className='font-medium text-xl'>Learn at your own pace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-12'>
                <p className='font-medium text-[28px] text-center'>included in the program:</p>
                <div className='flex justify-between gap-8 mt-6 shadow-custom-sm py-5 relative drop-shadow-xl shadow-[#0000001A] rounded-[10px] max-w-[1080px] mx-auto'>
                    <img className='absolute h-[100px] top-1/2 -translate-y-1/2 left-[26%] -translate-x-[26%]' src={line} alt="" />
                    <img className='absolute h-[100px] top-1/2 -translate-y-1/2 left-[47%] -translate-x-[47%]' src={line} alt="" />
                    <img className='absolute h-[100px] top-1/2 -translate-y-1/2 left-[73%] -translate-x-[73%]' src={line} alt="" />
                    <div className='flex flex-col items-center text-center gap-2'>
                        <img className='size-[48px]' src={certificates} alt="" />
                        <p className='text-[17px] font-medium'>Plus Certificate</p>
                        <p className='text-[14px] font-normal'>Official certificate to showcase your professional achievement.</p>
                    </div>
                    <div className='flex flex-col items-center text-center gap-2'>
                        <img className='size-[48px]' src={UDME} alt="" />
                        <p className='text-[17px] font-medium'>3 Free Udemy Course</p>
                        <p className='text-[14px] font-normal'>Get in depth knowledge of the subject</p>
                    </div>
                    <div className='flex flex-col items-center text-center gap-2'>
                        <img className='size-[48px]' src={CV} alt="" />
                        <p className='text-[17px] font-medium'>Free CV Review</p>
                        <p className='text-[14px] font-normal'>Expert feedback to improve and polish your resume.</p>
                    </div>
                    <div className='flex flex-col items-center text-center gap-2'>
                        <img className='size-[48px]' src={linkedin} alt="" />
                        <p className='text-[17px] font-medium'>Free LinkedIn Review</p>
                        <p className='text-[14px] font-normal'>Optimize your LinkedIn profile for better career opportunities.</p>
                    </div>
                </div>
                <div className='mt-32 px-24'>
                    <p className='text-[29px] font-medium'>Learn more about the Program</p>
                    <div className='grid grid-cols-3 gap-20 mt-10'>
                        <div className='flex flex-col gap-3'>
                            <p onClick={() => setLearnAbout('program')} className={`p-[10px] border border-[#79797940] text-center text-[#002B5B] text-[20px] font-normal cursor-pointer ${learnAbout === 'program' && 'shadow-md shadow-[#00000040]'}`}>Program details</p>
                            <p onClick={() => setLearnAbout('course')} className={`p-[10px] border border-[#79797940] text-center text-[#002B5B] text-[20px] font-normal cursor-pointer ${learnAbout === 'course' && 'shadow-md shadow-[#00000040]'}`}>Course details</p>
                            <p onClick={() => setLearnAbout('acc')} className={`p-[10px] border border-[#79797940] text-center text-[#002B5B] text-[20px] font-normal cursor-pointer ${learnAbout === 'acc' && 'shadow-md shadow-[#00000040]'}`}>Accreditations</p>
                            <p onClick={() => setLearnAbout('req')} className={`p-[10px] border border-[#79797940] text-center text-[#002B5B] text-[20px] font-normal cursor-pointer ${learnAbout === 'req' && 'shadow-md shadow-[#00000040]'}`}>Program requirements</p>
                        </div>
                        {learnAbout === 'program' && (
                            <div className='col-span-2'>
                                <p className='text-[18.4px]'>{note}</p>
                                <div className='mt-5 flex flex-col gap-2 ml-9'>
                                    <li className='list-disc'><span className='font-semibold'>Duration: </span>{duration}</li>
                                    <li className='list-disc'><span className='font-semibold'>Mode: </span>{mode}</li>
                                    <li className='list-disc'><span className='font-semibold'>Certification: </span>{certificate}</li>
                                    <li className='list-disc'><span className='font-semibold'>Price: </span>€{programPrice} (limited-time offer)</li>
                                </div>
                                <div className='mt-14 flex flex-col gap-2 ml-9'>
                                    <li className='font-semibold'>Extras Included:</li>
                                    <li className='font-normal ml-11'>Certificate of Completion</li>
                                    <li className='font-normal ml-11'>3 Free Udemy Courses</li>
                                    <li className='font-normal ml-11'>CV & LinkedIn Review</li>
                                </div>
                            </div>
                        )}

                        {learnAbout === 'req' && (
                            <div className='flex flex-col gap-2 ml-9 w-full col-span-2'>
                                <li className='font-normal'>No prior degree required</li>
                                <li className='font-normal'>Open to professionals, entrepreneurs, and recent graduates</li>
                                <li className='font-normal'>Must have access to a stable internet connection</li>
                                <li className='font-normal'>Willingness to commit 4–6 hours per week of self-study</li>
                                <li className='font-normal'>Basic understanding of English (course content is in English)</li>
                            </div>
                        )}

                        {learnAbout === 'acc' && (
                            <div className='flex flex-col gap-10 ml-9 w-full col-span-2'>
                                <p>TMBI is registered as a foreign education provider in Switzerland. All <span className='lowercase'>{programName}</span> programs are certified and meet international business education standards. Graduates receive a verifiable certificate to showcase professional development.</p>
                                <div className='grid grid-cols-4 items-center gap-y-12'>
                                    <img className='w-[80px]' src={acc1} alt="" />
                                    <img className='w-[120px]' src={acc2} alt="" />
                                    <img className='w-[110px]' src={acc3} alt="" />
                                    <img className='w-[120px]' src={acc4} alt="" />
                                    <img className='w-[80px]' src={acc5} alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachPrograms;