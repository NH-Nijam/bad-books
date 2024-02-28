import React from 'react';

const RightSidebar = () => {
    return (
        <div className='h-screen top-0 right-0 overflow-auto px-10 py-6 flex flex-col gap-6 max-lg:hidden custom-scrollbar w-[25%] sticky '>
            <div className='flex- flex-col gap-4'>
                <h1 className='text-heading4-bold text-light-1'>Following</h1>
                <div className='flex flex-col gap-4'>maping users</div>
            </div>
            <div className='flex- flex-col gap-4'>
                <h1 className='text-heading4-bold text-light-1'>Suggested People</h1>
                <div className='flex flex-col gap-4'>maping users</div>
            </div>
        </div>
    );
};

export default RightSidebar;