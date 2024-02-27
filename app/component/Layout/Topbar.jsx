
'use client'
import { SignOutButton, SignedIn } from '@clerk/nextjs';
import { Add, Logout, Search } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Topbar = () => {
    const router = useRouter
    const [search, setSearch] = useState('')
    return (
        <div className='flex justify-between items-center mt-6'>
            <div className='relative flex items-center max-sm:w-[150px] '>
                <input type="text" placeholder='Search posts, people, ...' value={search} onChange={(e) => setSearch(e.target.value)} className='search-bar' />
                <Search className='search-icon' />
            </div>
            <button className='create-post-btn max-lg:hidden' onClick={() => router.push('/Create-post')}><Add /><p>Create A Post</p> </button>
            <div className='flex gap-3 lg:hidden'>
                <SignedIn>
                    <SignOutButton>
                        <div className='flex items-center cursor-pointer gap-4'>
                            <Logout sx={{ color: 'white', fontSize: '32px' }} />
                        </div>
                    </SignOutButton>
                </SignedIn>
                <Link href="/">
                    <Image src='/images/profile.png' width={50} height={50} alt='Logo' className='rounded-full' />
                </Link>
            </div>
        </div>
    );
};

export default Topbar;