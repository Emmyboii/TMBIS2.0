import applyImg from '../Images/applyImg.svg'
import applybtn from '../Images/applybtn.png'

const Apply = () => {
    return (
        <div className='mt-7 px-24'>
            <div className='flex items-center justify-start gap-5'>
                <p className='text-[#ffffff] bg-gradient-to-r from-[#002B5B] via-[#00438E] via-[#004FA7] to-[#005BC1] bg-clip-text text-transparent text-[40px] font-bold'>Apply For Scholarships</p>
                <p className='text-sm rounded-full p-[5px] italic font-normal bg-[#C0943E33] border-[#79797980] border shadow-md shadow-[#00000040] fonded'>Limited Slots Available</p>
            </div>
            <div className='flex justify-between items-center mt-9'>
                <img className='w-[400px] self-end' src={applyImg} alt="" />
                <div className='relative pr-10'>
                    <img src={applybtn} className='absolute bottom-7 size-[100px] right-[-70px] z-30' alt="" />
                    <form className='rounded-[30px] flex flex-col gap-3 relative z-10 shadow-md shadow-[#00000040] border border-[#797979B2] p-4 bg-white'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>First Name</p>
                            <input
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-1'
                                type="text"
                                name=""
                                id=""
                                placeholder='John'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Last Name</p>
                            <input
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-1'
                                type="text"
                                name=""
                                id=""
                                placeholder='Doe'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Mobile Number</p>
                            <input
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-1'
                                type="number"
                                name=""
                                id=""
                                placeholder='+2348109876543'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Email</p>
                            <input
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-1'
                                type="email"
                                name=""
                                id=""
                                placeholder='johndoe@gmail.com'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Highest Education Level</p>
                            <select
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-1'
                                name=""
                                id=""
                            >
                                <option value=""></option>
                                <option className="text-[18px] font-normal" value="ssce">Senior Secondary School Certificate Examination(SSCE)</option>
                                <option className="text-[18px] font-normal" value="ond">Ordinary National Diploma(OND)</option>
                                <option className="text-[18px] font-normal" value="hnd">Higher National Diploma(HND)</option>
                                <option className="text-[18px] font-normal" value="hnd">Bachelor of Sciences(BSc)</option>
                                <option className="text-[18px] font-normal" value="hnd">Postgraduate Diploma(PGD)</option>
                                <option className="text-[18px] font-normal" value="masters">Masters Degree</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-lg font-[350]'>Available Programs</p>
                            <select
                                className='border border-[#797979B2] outline-none rounded-[15px] w-full py-3 px-1'
                                name=""
                                id=""
                            >
                                <option value=""></option>
                                <option className="text-[18px] font-normal" value="ssce">Senior Secondary School Certificate Examination(SSCE)</option>
                                <option className="text-[18px] font-normal" value="ond">Ordinary National Diploma(OND)</option>
                                <option className="text-[18px] font-normal" value="hnd">Higher National Diploma(HND)</option>
                                <option className="text-[18px] font-normal" value="hnd">Bachelor of Sciences(BSc)</option>
                                <option className="text-[18px] font-normal" value="hnd">Postgraduate Diploma(PGD)</option>
                                <option className="text-[18px] font-normal" value="masters">Masters Degree</option>
                            </select>
                        </div>
                        <button className='text-[21px] font-medium py-3 w-full bg-[#005BC1BF] rounded-[15px]'>Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Apply