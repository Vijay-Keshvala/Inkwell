import React from 'react'

const Login = () => {
    return (
        <>
            <div className="relative isolate pt-40 min-h-screen bg-white px-6 sm:px-12 lg:px-24">
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

                {/* Login Card */}
                <div className="flex flex-col justify-center items-center min-h-full">
                    <div className="w-full max-w-sm bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-xl">
                        <div className="text-center">
                            <img
                                alt="Your Company"
                                src="assets/ink.png"
                                className="mx-auto h-20 w-auto"
                            />
                            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <form action="#" method="POST" className="mt-10 space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                />
                                <div className="mt-2 text-right">
                                    <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 transition"
                            >
                                Sign in
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Sign up here
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom Gradient Background */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]  -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Login
