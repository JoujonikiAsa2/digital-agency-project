import React from 'react';
import mask from '../../../assets/home/Mask.png'
import mask1 from '../../../assets/home/Mask1.png'
import mask2 from '../../../assets/home/Mask2.png'
import mask3 from '../../../assets/home/Mask3.png'
import mask4 from '../../../assets/home/Mask4.png'

const FeaturedProjects = () => {
    return (
        <div>
            <div className='w-full px-[4vw]  bg-[#D7F5DC] pb-20'>
                <div className='py-12 space-y-3'>
                    <h5 className='text-lg font-medium text-[#20B15A]'>Work List</h5>
                    <p className='text-xl font-medium max-w-sm'>We provide the Perfect Solution to your business growth</p>
                </div>
                <div className='flex flex-col justify-center items-center md:flex-row lg:flex-row gap-5'>
                    <div className='w-[90vw] lg:w-[50vw] space-y-3'>
                        <img src={mask} alt=""   className='w-full'/>
                        <p>App Design - June 20, 2022</p>
                        <h2 className='text-lg font-bold'>App Redesign</h2>
                    </div>
                    <div className='w-[90vw] lg:w-[50vw] h-[480px] grid grid-cols-2 gap-8 mb-36'>
                        <div className='space-y-3 w-full '>
                            <img src={mask1} alt="" className='w-full h-[10rem]'/>
                            <p>App Design - June 20, 2022</p>
                            <h2 className='text-lg font-bold'>Redesign channel website landng page Redesign</h2>
                        </div>
                        <div className='space-y-3 w-full'>
                            <img src={mask2} alt=""  className='w-full h-[10rem]'/>
                            <p>App Design - June 20, 2022</p>
                            <h2 className='text-lg font-bold'>Redesign channel website landng page</h2>
                        </div>
                        <div className='space-y-3 w-full '>
                            <img src={mask3} alt=""  className='w-full h-[10rem]'/>
                            <p>App Design - June 20, 2022</p>
                            <h2 className='text-lg font-bold'>Redesign channel website landng page</h2>
                        </div>
                        <div className='space-y-3 w-full'>
                            <img src={mask4} alt=""  className='w-full h-[10rem]'/>
                            <p>App Design - June 20, 2022</p>
                            <h2 className='text-lg font-bold'>Redesign channel website landng page</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;