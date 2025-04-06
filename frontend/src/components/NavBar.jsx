'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Books',
        href: '/products',
        children: [
            { name: 'All Books', href: '/products' },
            { name: 'Fiction', href: '#' },
            { name: 'Non-fiction', href: '#' },
            { name: 'Academic', href: '#' },
            { name: 'Self-Help', href: '#' },
            { name: 'Children', href: '#' },
        ],
    },
    { name: 'About us', href: '/about' },
    { name: 'Contact us', href: '/contact' },
];


export const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                            <span className="sr-only">Your Company</span>
                            <Link to={'/'}>
                            <img
                                className="h-22 w-auto"
                                src="assets/ink.png"
                                alt=""
                            />
                            </Link>
                            
                        
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="size-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 relative">
                        {navigation.map((item) =>
                            item.children ? (
                                <div key={item.name} className="relative group">
                                    <div className="flex items-center text-sm font-semibold text-gray-900 gap-1 cursor-pointer">
                                        <button
                                            className="inline-flex items-center gap-1 focus:outline-none"
                                        >
                                            {item.name}
                                            <svg
                                                className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-20">
                                        <ul className="py-2">
                                            {item.children.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link
                                                        to={subItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            ) : (
                                <Link key={item.name} to={item.href} className="text-sm font-semibold text-gray-900">
                                    {item.name}
                                </Link>
                            )
                        )}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to={'/login'} className="text-sm font-semibold text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">

                                <span className="sr-only">Your Company</span>
                                <Link to={'/'}>
                                <img
                                    className="h-20 w-auto"
                                    src="assets/ink.png"
                                    alt=""
                                />
                                </Link>
                                
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="size-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                            onClick={() => setMobileMenuOpen(false)} // close menu after clicking
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            

        </div>

    )
}

