import React from 'react'

export const Landing = () => {
  return (
    <div>
        {/* Floating Books */}
        <div className="absolute top-80 left-5 md:left-20 w-24 md:w-48 z-10 animate-float-slow">
                <img src="/assets/3dbook.png" alt="Floating Book" className="w-full" />
            </div>

            <div className="absolute top-28 right-5 md:right-[10%] w-24 md:w-48 z-10 animate-float">
                <img src="/assets/3dbook2.png" alt="Floating Book" className="w-full" />
            </div>

            {/* Hero Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* Background gradient */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                {/* Main content */}
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next big book reveal.{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div className="text-center relative">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance text-gray-900 relative z-10">
                            Discover Your Next Favorite{' '}
                            <span className="relative inline-block text-indigo-600">
                                Read
                                <svg
                                    className="absolute left-1/2 top-full w-[160px] -translate-x-1/2 -translate-y-2 z-[-1] animate-draw-stroke"
                                    viewBox="0 0 200 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M2 15 C50 25, 150 5, 198 15"
                                        stroke="#6366F1"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeDasharray="250"
                                        strokeDashoffset="250"
                                    />
                                </svg>
                            </span>

                        </h1>
                        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500">
                            Browse, explore, and shop books you'll love — anytime, anywhere.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Start reading
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
    </div>
  )
}
