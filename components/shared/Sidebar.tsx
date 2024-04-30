'use client'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

type Props = {}

const Sidebar = (props: Props) => {
    const pathname = usePathname();

  return (
    <aside className='hidden h-screen w-72 p-5 shadow-md shadow-purple-200/50 lg:flex bg-white'>
        <div className= 'size-full flex flex-col gap-4'>
            <Link 
                href="/"
                className='flex items-center gap-2 md:py-2'
            >
                <Image
                    src="/assets/images/logo-text.svg"
                    alt='logo'
                    height={180}
                    width={180}
                />
            </Link>
            <nav className='h-full md:flex flex-col justify-between md:gap-4'>
                <SignedIn>
                    <ul className='hidden md:flex flex-col items-start gap-2 w-full'>
                        {navLinks.slice(0,6).map((link) => {
                            const isActive = link.route === pathname;

                            return (
                                <li 
                                    key={link.label}
                                    className={cn(
                                        'flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner group',
                                        isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                                    )}
                                >
                                    <Link 
                                        href={link.route}
                                        className='p-16-semibold flex size-full gap-4 p-4'
                                    >
                                        <Image 
                                            src={link.icon}
                                            alt='logo'
                                            width={24}
                                            height={24}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.slice(6).map((link) => {
                            const isActive = link.route === pathname;

                            return (
                                <li 
                                    key={link.label}
                                    className={cn(
                                        'flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner group',
                                        isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                                    )}
                                >
                                    <Link 
                                        href={link.route}
                                        className='p-16-semibold flex size-full gap-4 p-4'
                                    >
                                        <Image 
                                            src={link.icon}
                                            alt='logo'
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className='p-3'>
                            <UserButton afterSignOutUrl='/' showName />
                        </li>
                    </ul>
                    
                </SignedIn>

                <SignedOut>
                    <Button
                        asChild
                        className='button bg-purple-gradient bg-cover'
                    >
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar