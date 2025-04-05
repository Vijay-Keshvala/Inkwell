import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion, useInView } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'

export const TopCategories = () => {
  const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'assets/history.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'assets/science.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'assets/poetry.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: 'Reading',
      description: 'Books and bookstands',
      imageSrc: 'assets/nonfiction.jpg',
      imageAlt: 'Books and accessories.',
      href: '#',
    },
    {
      name: 'Wellness',
      description: 'Mindful products',
      imageSrc: 'assets/health.jpg',
      imageAlt: 'Wellness and health accessories.',
      href: '#',
    },
  ]

  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' })

  const swiperRef = useRef(null)
  const swiperInView = useInView(swiperRef, { once: true, margin: '-50px' })

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Animate heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold font-sans text-gray-900 mb-10"
        >
          Popular Categories
        </motion.h2>

        {/* Animate Swiper */}
        <motion.div
          ref={swiperRef}
          initial={{ opacity: 0, y: 50 }}
          animate={swiperInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {callouts.map((callout, index) => (
              <SwiperSlide key={callout.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden min-h-[26rem]"
                >
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-80 object-cover group-hover:opacity-75 transition"
                  />
                  <div className="p-4 text-left">
                    <h3 className="text-sm text-gray-500">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {callout.description}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  )
}
