import React from 'react';
import HorizontalSlideBar from './HorizontalSlideBar';
// import HeroServices from './HeroServices';
import ContactPage from './ContactPage';

const Services = () => {
    return (
        <div className="m-0 p-0 overflow-x-hidden">
            <main className="m-0 p-0">
                
                {/* <HeroServices /> */}

                <HorizontalSlideBar />
                <ContactPage />
            </main>
        </div>
    );
};

export default Services;
