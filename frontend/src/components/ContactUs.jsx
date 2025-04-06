import React from 'react';
import { EnvelopeIcon, PhoneIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export const ContactUs = () => {
    return (
        <div className="relative isolate pt-40 pb-16 px-6 sm:px-12 lg:px-24">

            {/* Top Gradient Background */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
            -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] 
            opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>


            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto shadow-xl rounded-2xl overflow-hidden  bg-opacity-90 backdrop-blur-md p-10">

                {/* Left Panel */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in touch</h2>
                    <p className="text-gray-600 mb-8">
                        Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu.
                        Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                    </p>

                    <ul className="space-y-6 text-gray-700 text-sm">
                        <li className="flex items-start gap-3">
                            <BuildingOfficeIcon className="w-6 h-6 text-gray-500" />
                            <span>545 Mavis Island<br />Chicago, IL 99191</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <PhoneIcon className="w-6 h-6 text-gray-500" />
                            <span>+1 (555) 234-5678</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <EnvelopeIcon className="w-6 h-6 text-gray-500" />
                            <span>hello@example.com</span>
                        </li>
                    </ul>
                </div>

                {/* Right Panel - Form */}
                <div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone number</label>
                            <input
                                type="tel"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows={4}
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md bg-indigo-600 px-6 py-2 text-white text-sm font-medium hover:bg-indigo-700 transition"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            {/* Bottom Gradient Background */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] 
            -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 
            sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

        </div>
    );
};
