import React from 'react';

import Title from '../../SharedComponents/Title/Title';
import Banner from '../../SharedComponents/Banner/Banner';

const Service = () => {
    return (
        <div>
            <Banner bannerTitle="Services"></Banner>
            <div className='px-[4vw]'>
                <Title heading="Our All Services" subHeading="We Provide BestWeb design services"></Title>
            </div>
        </div>
    );
};

export default Service;