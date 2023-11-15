import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-transparent w-full text-white fixed z-30 px-[4vw] py-[2vw]">
            <div className="flex-1">
                <h2 className='text-2xl font-bold text-black'>Design<span className='text-[#F55F1D]'>AGENCY</span></h2>
            </div>
            <div className="lg:flex justify-between gap-8 text-black hidden">
                <Link to="/"><a>Home</a></Link>
                <Link to="/team"><a>Team</a></Link>
                <Link to="/"><a>Service</a></Link>
                <Link to="/"><a>Projects</a></Link>
                <Link to="/"><a>Testimonials</a></Link>
                <Link to="/"><button className='btn btn-outline w-20 h-10'>Login</button></Link>
                <Link to="/"><button className='btn btn-outline w-20 h-10'>Register</button></Link>
            </div>
            <div className='dropdown lg:hidden flex text-black'>
                <label tabIndex={0}>
                    <IoMenu className=' text-black text-2xl'></IoMenu>
                </label>
                <div tabIndex={0} className="menu menu-sm dropdown-content mt-72 right-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
                    <Link to="/"><a>Home</a></Link>
                    <Link to="/team"><a>Team</a></Link>
                    <Link to="/"><a>Service</a></Link>
                    <Link to="/"><a>Projects</a></Link>
                    <Link to="/"><a>Testimonials</a></Link>
                    <Link to="/"><button className='btn btn-outline w-20 h-10'>Login</button></Link>
                    <Link to="/"><button className='btn btn-outline w-20 h-10'>Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;