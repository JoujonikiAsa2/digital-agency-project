import React from 'react';
import { RiArrowRightFill } from "react-icons/ri"
import activity from '../../../assets/home/Activity.svg'
import heart from '../../../assets/home/Heart.svg'
import work from '../../../assets/home/Work.svg'
const WorkList = () => {
    return (
        <div className='px-[4vw] lg:min-h-[450px]'>
            <div className='py-12 space-y-3'>
                <h5 className='text-lg font-medium text-[#20B15A]'>Work List</h5>
                <p className='text-xl font-medium max-w-sm'>We provide the Perfect Solution to your business growth</p>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center lg:justify-between items-center'>
                <div className='w-60 lg:w-96 space-y-3'>
                    <img src={activity} alt="" />
                    <div className='w-60'>
                        <p>We help identify the best ways to improve your business</p>
                        <div className='flex items-center gap-3 p-4'>Learn More <RiArrowRightFill></RiArrowRightFill>
                        </div>
                    </div>
                </div>
                <div className='w-60 lg:w-96 space-y-3'>
                    <img src={heart} alt="" />
                    <div className='w-60'>
                        <p>We help identify the best ways to improve your business</p>
                        <div className='flex items-center gap-3 p-4'>Learn More <RiArrowRightFill></RiArrowRightFill>
                        </div>
                    </div>
                </div>
                <div className='w-60 lg:w-96 space-y-3'>
                    <img src={work} alt="" />
                    <div className='w-60'>
                        <p>We help identify the best ways to improve your business</p>
                        <div className='flex items-center gap-3 p-4'>Learn More <RiArrowRightFill></RiArrowRightFill>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkList;