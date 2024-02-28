'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs';

import { Logout } from '@mui/icons-material';

const LeftSideBar = () => {
    return (
        <div className='h-screen top-0 left-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-lg:hidden custom-scrollbar  w-[25%]'>
            <Link href="/" className='w-full flex justify-center'>
                <Image src='/images/logo.png' width={200} height={200} alt='Logo' />
            </Link>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2 items-center text-light-1'>
                    <Link href="#">
                        <Image src='/images/profile.png' width={50} height={50} alt='Logo' className='rounded-full' />
                    </Link>
                    <p className='text-small-bold'>Nijam</p>
                </div>
                <div className='flex text-light-1 justify-between'>
                    <div className='flex flex-col items-center'>
                        <p className='text-base-bold'> 1</p>
                        <p className='text-tiny-medium'> Posts</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-base-bold'> 0</p>
                        <p className='text-tiny-medium'> Followers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-base-bold'> 0</p>
                        <p className='text-tiny-medium'>Following</p>
                    </div>
                </div>
                <hr className='my-4'/>
                <Menu />
                <hr className='my-4'/>
                <div className='flex  gap-4 items-center'>
                    <UserButton />
                    <p className='text-light-1 text-bold'>Manage Account</p>
                </div>
                <SignedIn>
                    <SignOutButton>
                        <div className='flex items-center cursor-pointer gap-4'>
                            <Logout sx={{color:'white', fontSize:'32px'}}/>
                            <p className='text-body-bold text-light-1'>Log Out</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </div>
    );
};

export default LeftSideBar;