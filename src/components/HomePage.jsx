import React from 'react';
import HorizontalImageScroll from './HorizontalImageScroll';
import ThreeColumns from './ThreeColumns';

const HomePage = () => {
    return (
        <div className="m-0 p-0 overflow-x-hidden">
            <main className="m-0 p-0">
                <ThreeColumns />
               
                <HorizontalImageScroll />
            </main>
           
        </div>
    );
};

export default HomePage;