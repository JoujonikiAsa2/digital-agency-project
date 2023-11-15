import React, { useEffect, useState } from 'react';
import Work from './Work';
import Title from '../../../SharedComponents/Title/Title';
const WorkList = () => {

    const [works, setWorks] = useState([])
    useEffect(() => {
        fetch('./worklist.json')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])
    return (
        <div className='px-[4vw] lg:min-h-[450px]'>
            <Title heading="Work Lists" subHeading="We provide the Perfect Solution to your business growth"></Title>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center lg:justify-between items-center'>
                {
                    works.map(work =><Work key={work.id} work={work}></Work>)
                }
            </div>
        </div>
    );
};

export default WorkList;