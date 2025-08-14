'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuComponent = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-black text-white p-4 shadow-[0_0_10px_rgba(255,_255,_255,_0.8)]">
            <ul className="flex justify-evenly items-center">
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

