import { FaCheck, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import ProgramDetails from './ProgramDetails';

const Cart = ({ openCart, setOpenCart }) => {

    const [addedPrograms, setAddedPrograms] = useState([]);

    useEffect(() => {
        const fetchCartItems = () => {
            const stored = localStorage.getItem('programsData');
            if (!stored) return;

            try {
                const data = JSON.parse(stored);
                const categoryArray = Array.isArray(data) ? data : [data];
                const cartItems = [];

                categoryArray.forEach((cat) => {
                    if (cat.addToCart) {
                        cartItems.push({
                            programLabel: cat.programName,
                            programPrice: 0,
                            programImg: cat.heroImg,
                            projectPath: cat.path,
                        });
                    }

                    cat.programDetails?.forEach((program) => {
                        if (program.addToCart) {
                            cartItems.push(program);
                        }
                    });
                });

                setAddedPrograms(cartItems);
            } catch (error) {
                console.error('Failed to parse or extract cart items:', error);
            }
        };

        // Load initially
        fetchCartItems();

        window.addEventListener('cartUpdated', fetchCartItems);
        return () => window.removeEventListener('cartUpdated', fetchCartItems);
    }, []);

    const suggestedPrograms = (() => {
        const stored = localStorage.getItem('programsData');
        const allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

        const cartPaths = new Set(addedPrograms.map(p => p.projectPath));
        const cartNames = [...new Set(addedPrograms.map(p => p.programName))];

        const suggestions = [];
        const addedSuggestionPaths = new Set();

        // Step 1: 1 suggestion per cart programName
        for (const name of cartNames) {
            for (const category of allPrograms) {
                const program = category.programDetails.find(p =>
                    p.programName === name && !cartPaths.has(p.projectPath) && !addedSuggestionPaths.has(p.projectPath)
                );
                if (program) {
                    suggestions.push(program);
                    addedSuggestionPaths.add(program.projectPath);
                    break;
                }
            }
        }

        // Step 2: Add more from same categories to reach 3–5
        let i = 0;
        while (suggestions.length < 3 || (suggestions.length < 5 && cartNames.length > 1)) {
            const currentName = cartNames[i % cartNames.length];

            for (const category of allPrograms) {
                const extra = category.programDetails.find(p =>
                    p.programName === currentName && !cartPaths.has(p.projectPath) && !addedSuggestionPaths.has(p.projectPath)
                );
                if (extra) {
                    suggestions.push(extra);
                    addedSuggestionPaths.add(extra.projectPath);
                    break;
                }
            }

            i++;
            if (i > 10) break; // fallback to avoid infinite loops
        }

        return suggestions;
    })();

    const subtotal = addedPrograms.reduce((acc, item) => acc + parseFloat(item.programPrice), 0);

    const [onScroll, setOnScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setOnScroll(window.scrollY > 40)
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <>
            {openCart && addedPrograms.length > 0 && (
                <div className={`fixed sh:max-w-[420px] flex flex-col z-50 gap-3 w-full sh:right-10 h-[90%] overflow-y-auto bg-white shadow-custom-input shadow-[#002B5B80] pt-5 pb-5 px-3 ${onScroll ? 'sh:top-2 top-0' : 'sh:top-[92px] top-[0px]'}`}>
                    <div className='flex items-center justify-center'>
                        <FaTimes onClick={() => setOpenCart(false)} className='absolute left-2 text-lg cursor-pointer' />
                        <p className='text-[21px] text-center font-medium'>Subtotal ({addedPrograms.length} {addedPrograms.length === 1 ? 'Item' : 'Items'}):  €{subtotal}</p>
                    </div>
                    <button
                        disabled={addedPrograms.length === 0}
                        className={`text-[20px] font-medium py-[14px] px-[10px] w-full bg-[#002B5B] text-white ${addedPrograms.length <= 0 && 'bg-[#1b4574]'}`}>
                        Proceed to Cart ({addedPrograms.length} {addedPrograms.length <= 1 ? 'Item' : 'Items'})
                    </button>

                    {addedPrograms.map(({ programLabel, programPrice, programImg, projectPath }, index) => (
                        <div key={projectPath + index} className='border border-[#79797940] flex items-center w-full gap-3 bg-[#D8D8D826] py-3 px-2'>
                            <img className='w-[90px] h-[62px] object-cover' src={programImg} alt={programLabel} />
                            <div className='flex flex-col gap-1 w-full'>
                                <p className='font-normal text-[17px]'>{programLabel}</p>
                                <p className='font-normal text-[19px]'>€{programPrice}</p>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#002B5B] text-white w-auto rounded-full p-[2px] text-xs'>
                                            <FaCheck />
                                        </div>
                                        <p className='font-normal text-[14px]'>Added to cart</p>
                                    </div>
                                    <p
                                        onClick={() => {
                                            const stored = localStorage.getItem('programsData');
                                            let allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

                                            const updated = allPrograms.map(category => {
                                                const updatedDetails = category.programDetails.map(p => {
                                                    if (p.projectPath === projectPath) {
                                                        return { ...p, addToCart: false };
                                                    }
                                                    return p;
                                                });
                                                return { ...category, programDetails: updatedDetails };
                                            });

                                            localStorage.setItem('programsData', JSON.stringify(updated));
                                            window.dispatchEvent(new Event('cartUpdated'));
                                            if (addedPrograms.length === 1) {
                                                setOpenCart(false)
                                            }
                                        }}
                                        className='text-red-500 text-sm cursor-pointer'>Remove</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {suggestedPrograms.length > 0 && (
                        <>
                            <hr className='border border-[#797979B2]' />
                            <p className='font-medium text-[19px] mb-2'>You may also like...</p>
                            {suggestedPrograms.map((program, index) => (
                                <div key={program.projectPath + index} className='border border-[#79797940] flex items-center gap-3 bg-[#D8D8D826] py-3 px-2'>
                                    <img className='w-[120px] h-[92px] object-cover' src={program.programImg} alt={program.programLabel} />
                                    <div className='flex flex-col gap-1 items-start'>
                                        <p className='font-normal text-[19px]'>{program.programLabel}</p>
                                        <p className='font-normal text-[19px]'>€{program.programPrice}</p>
                                        <button
                                            onClick={() => {
                                                const stored = localStorage.getItem('programsData');
                                                let allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

                                                const updated = allPrograms.map(category => {
                                                    const updatedDetails = category.programDetails.map(p => {
                                                        if (p.projectPath === program.projectPath) {
                                                            return { ...p, addToCart: true };
                                                        }
                                                        return p;
                                                    });
                                                    return { ...category, programDetails: updatedDetails };
                                                });

                                                localStorage.setItem('programsData', JSON.stringify(updated));
                                                window.dispatchEvent(new Event('cartUpdated'));
                                                setOpenCart(true)
                                            }}
                                            className='text-[14px] font-medium rounded-md p-[10px] bg-[#002B5B] text-white'
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default Cart