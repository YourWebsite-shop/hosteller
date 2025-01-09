import React from 'react'

const Adventure: React.FC = () => {
    const arr: Array<null> = Array.from({ length: 3 })
    return (
        <div className='bg-black'>
            <div className='max-w-[1216px] mx-auto py-10 px-4'>
                <h2 className='text-white text-3xl text-center font-bold'>Step Into the Adventure Capital of India</h2>
                <p className='text-center text-gray-300 py-2'>Discover the perfect blend of adventure, spirituality, and culture in Rishikesh. Our strategic location puts you minutes away from the best experiences.</p>

                <div className='flex flex-col md:flex-row md:justify-around gap-y-6 mt-10 w-full '>
                    {arr.map((item, i) => (
                        <div className='text-white bg-[#262626] p-6 rounded-2xl w-full hover:-translate-y-2 transition-all duration-200 md:w-[30%]'>
                            <p>icons</p>
                            <h5 className='text-xl font-semibold py-2'>River Rafting</h5>
                            <p className='text-gray-400'>Experience thrilling white-water rafting on the Ganges. Perfect for beginners and experienced adventurers alike.</p>
                            <button className='text-yellow-400 pt-4'>Book Now &rarr;</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full justify-center flex'>
                <button className='bg-yellow-400 text-lg px-8 py-3 rounded-full text-black font-semibold'>Book Your Adventure Now</button>
            </div>
        </div>
    )
}

export default Adventure
