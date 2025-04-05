'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const logos = [
  { src: 'assets/pengium.svg', alt: 'Penguin' },
  { src: 'assets/macn.jpg', alt: 'Macmillan' },
  { src: 'assets/oreilly.svg', alt: 'O’Reilly' },
  { src: 'assets/blooms.svg', alt: 'Bloomsbury' },
  { src: 'assets/wiley.svg', alt: 'Statamic' },
]

export default function Example() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const headingVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <div className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Gradient stains - Right side only */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-tr from-indigo-200 via-pink-200 to-purple-200 opacity-25 blur-3xl rounded-full z-0 pointer-events-none translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tr from-purple-200 via-blue-200 to-indigo-200 opacity-20 blur-2xl rounded-full z-0 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 opacity-15 blur-2xl rounded-full z-0 pointer-events-none translate-x-1/3 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Animated Heading */}
        <motion.h2
          className="text-center text-2xl font-semibold text-gray-900"
          variants={headingVariant}
          initial="hidden"
          animate={controls}
        >
          From the world’s most bestselling publishers
        </motion.h2>

        {/* Logos Grid */}
        <div
          ref={ref}
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {logos.map((logo, i) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              custom={i}
              variants={logoVariants}
              initial="hidden"
              animate={controls}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
