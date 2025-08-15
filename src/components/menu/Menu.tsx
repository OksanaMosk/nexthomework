'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import logo from 'favicon/android-chrome-512x512.png';
const MenuComponent = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center items-center h-20 bg-black text-white shadow-[0_0_10px_rgba(255,_255,_255,_0.8)]">
            <Link href="/" className="flex justify-end items-center  w-1/4  text-2xl font-bold text-white hover:text-[#3af0f0]">
                <Image
                    src="/favicon/android-chrome-512x512.png"
                    alt="logo"
                    width={51}
                    height={51}
                />
            </Link>

            <ul className="flex justify-evenly items-center w-3/4">
                {[
                    { href: "/users", label: "Users" },
                    { href: "/posts", label: "Posts" },
                    { href: "/comments", label: "Comments" },
                ].map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`${
                                pathname === href
                                    ? "text-[#3af0f0] underline"
                                    : "text-white hover:text-[#CCFFFF]"
                            }`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuComponent;

