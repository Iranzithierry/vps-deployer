"use client";
import React from 'react'
import Link from 'next/link'
import useScroll from '@/lib/hooks/use-scroll';
import Logo from '../logo';
import { LinkButton } from '../ui/link-button';

export default function Header() {
    const scrolled = useScroll(50);
    return (
        <header className={`fixed top-0  w-full px-4 lg:px-6 h-14 flex items-center ${scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
            } z-30 transition-all`}>
            <Logo />
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                <div>
                    <Link className="font-medium hover:underline underline-offset-4" href="#">
                        Features
                    </Link>
                </div>
                <div>
                    <Link className="font-medium hover:underline underline-offset-4" href="#">
                        Pricing
                    </Link>
                </div>
                <div>
                    <Link className="font-medium hover:underline underline-offset-4" href="#">
                        About
                    </Link>
                </div>
                <div>
                    <Link className="font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </div>
                <div>
                <LinkButton linkTo='/login'>
                        Sign In
                    </LinkButton>
                </div>
            </nav>
        </header>
    )
}
