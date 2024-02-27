'use client'
import Link from 'next/link';
import { sidebarLinks } from '../../../constants/index'
import { usePathname } from "next/navigation";

const BottomBar = () => {
    const pathName = usePathname();
    return (
        <div className='flex sticky bottom-0 z-20 w-full bg-dark-1 px-6 py-3 items-center justify-between lg:hidden'>
            {
                sidebarLinks.map((link) => {
                    const isActive = pathName === link.route;
                    return (
                        <Link key={link.label} href={link.route} className={`flex gap-2 justify-center items-center rounded-lg md:p-4 p-2 ${isActive && 'bg-purple-1'}`}>
                            {link.icon} <p className='text-light-1 text-subtle-medium max-sm:hidden'>{link.label}</p>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default BottomBar;