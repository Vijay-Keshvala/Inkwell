import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const Statistics = () => {
    const stats = [
        { id: 1, name: 'Worldwide books sold', value: 44000 },
        { id: 2, name: 'Secure payments', value: 120000 },
        { id: 3, name: 'New users annually', value: 46000 },
    ];

    // Intersection observer hook to trigger animation when in view
    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation whenever the element comes into view
        threshold: 0.2,      // Trigger when 20% of the element is in view
    });

    return (
        <div ref={ref} className="bg-white py-24 sm:py-32">
            {/* Centered heading with gradient color applied only to the word "Inkwell" */}
            <motion.h1
                className="text-4xl font-semibold text-center mb-16"
                initial={{ opacity: 0, y: 20 }} // Start from below
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Move up as it comes into view
                transition={{ duration: 1 }}
            >
                "The <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Inkwell</span> Difference"
            </motion.h1>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            className="mx-auto flex max-w-xs flex-col gap-y-4"
                            initial={{ opacity: 0, y: 20 }} // Start from below
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Move up as it comes into view
                            transition={{
                                duration: 1,
                                delay: stat.id * 0.2, // Stagger animation for each stat
                            }}
                        >
                            <dt className="text-base text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {inView && (
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={2.5} // Duration of the count animation in seconds
                                        separator=","
                                    />
                                )}
                            </dd>
                        </motion.div>
                    ))}
                </dl>
            </div>
        </div>
    );
};
