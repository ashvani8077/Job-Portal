import React from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-1/5'>
                        <FilterCard />
                    </div>
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        {jobsArray.length === 0 ? (
                            <span className='text-gray-500 text-center block mt-5'>Job not found</span>
                        ) : (
                            <div className='grid grid-cols-3 gap-4'>
                                {jobsArray.map((item, index) => (
                                    <div key={index}>
                                        <Job />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
