import React from 'react';
import profile from '../../../assets/icons/3.svg'
import like from '../../../assets/icons/Like.svg'
import happy from '../../../assets/icons/Happy.svg'
import file from '../../../assets/icons/Scan.svg'

const Stat = () => {
    return (
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between items-center px-[4vw] pb-12">

            <div className="w-60 h-60 card justify-center items-center rounded-lg shadow-2xl p-6 text-center space-y-4">
                <div className="flex justify-center items-center">
                    <img src={profile} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>240452</h2>
                <p>Followers</p>
            </div>

            <div className="w-60 h-60 card justify-center items-center rounded-lg shadow-2xl p-6 text-center space-y-4">
                <div className="flex justify-center items-center">
                    <img src={like} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>6300</h2>
                <p>Solved Problems</p>
            </div>

            <div className="w-60 h-60 card justify-center items-center rounded-lg shadow-2xl p-6 text-center space-y-4">
                <div className="flex justify-center items-center">
                    <img src={happy} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>25000</h2>
                <p>Happy Customers</p>
            </div>
            <div className="w-60 h-60 card justify-center items-center rounded-lg shadow-2xl p-6 text-center space-y-4">
                <div className="flex justify-center items-center">
                    <img src={file} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>360452</h2>
                <p>Projects</p>
            </div>

        </div>
    );
};

export default Stat;