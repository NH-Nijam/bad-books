'use client'
import React from 'react';
import Topbar from './Topbar';
import { usePathname } from 'next/navigation';
import { pageTitles } from '@constants';

const MainContainer = ({ children }) => {
    const currentPath = usePathname()
    const regex = /^\/([^\/]+)/;
    const firstPath = currentPath.match(regex) ? Path2D.match(regex)[0] : currentPath;
    const title = pageTitles.find((page) => page.url === firstPath)?.title || '';
    return (
        <div className='flex flex-col flex-1 w-full px-4 md:px-10 lg:px-4 xl:px-20 '>
            <Topbar />
            <div className='mt-6 '>
                <h1 className='mb-5 text-heading2-bold max-sm:text-heading3-bold text-light-1'>{title}</h1>
            </div>
            <div className='h-screen overflow-y-scroll custom-scrollbar border'>
                {children}
            </div>
        </div>
    );
};

export default MainContainer;