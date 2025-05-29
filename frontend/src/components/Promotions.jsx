import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const Promotions = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div className="relative overflow-hidden bg-white">
            {/* Decorative gradient stains - right side only, not starting from top */}
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200 opacity-25 blur-3xl rounded-full transform translate-x-1/3 pointer-events-none z-0" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-indigo-200 via-pink-200 to-purple-200 opacity-20 blur-2xl rounded-full transform translate-x-1/4 pointer-events-none z-0" />

            {/* Main Content */}
            <div className="relative z-10 pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeIn' }}
                        className="sm:max-w-lg"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Escape into worlds{' '}
                            <span className="whitespace-nowrap">
                                beyond{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600">
                                    imagination
                                </span>
                            </span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Discover bestselling titles and hidden gems curated for every kind of reader. Dive into stories that inspire, thrill, and transform.
                        </p>
                    </motion.div>

                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid with vertical scrolling */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="h-[600px] overflow-hidden">
                                        <div className="flex items-center space-x-6 lg:space-x-8 animate-vertical-scroll">
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        alt=""
                                                        src="https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://m.media-amazon.com/images/I/81gC9oXiMHL._AC_UF350,350_QL50_.jpg"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://m.media-amazon.com/images/I/7125+5E40JL._AC_UF1000,1000_QL80_.jpg"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_.jpg"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UF1000,1000_QL80_.jpg"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/products"
                                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                            >
                                Shop Collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
