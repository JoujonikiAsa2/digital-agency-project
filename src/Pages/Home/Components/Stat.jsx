import React, { useEffect, useState } from 'react';
import Counter from './Counter';

const Stat = () => {

    const [stat, setStat] = useState([])

    useEffect(()=>{
        fetch("./counter.json")
        .then(res=>res.json())
        .then(data=>setStat(data))
    },[])
    return (
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between items-center px-[4vw] pb-12">
            {
                stat.map(counter=> <Counter key={counter.id} counter={counter}></Counter>)
            }
        </div>
    );
};

export default Stat;