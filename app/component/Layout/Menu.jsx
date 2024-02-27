'use client'
import Link from 'next/link';
import { sidebarLinks } from '../../../constants/index'
import { usePathname } from "next/navigation";

const Menu = () => {
    const pathName = usePathname();
    return (
        <div className='flex flex-col gap-2'>
            {
                sidebarLinks.map((link) => {
                    const isActive = pathName === link.route;
                    return (
                        <Link key={link.label} href={link.route} className={`flex gap-4 justify-start rounded-lg px-4 py-4 ${isActive && 'bg-purple-1'}`}>
                            {link.icon} <p className='text-light-1'>{link.label}</p>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Menu;