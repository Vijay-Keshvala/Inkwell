import React from "react";

const timeline = [
    {
        date: "Jan 2023",
        title: "Founded BookVerse",
        description:
            "Launched our mission to bring affordable and diverse books to everyone online.",
    },
    {
        date: "Mar 2023",
        title: "Reached 10k+ Readers",
        description:
            "Our growing community of book lovers crossed 10,000 happy readers.",
    },
    {
        date: "Jul 2023",
        title: "Partnered with 50+ Publishers",
        description:
            "We collaborated with publishers globally to bring authentic titles to our shelves.",
    },
    {
        date: "Feb 2024",
        title: "Launched BookVerse Premium",
        description:
            "A subscription model giving early access to rare collections and discounts.",
    },
];

const brands = [
    "Penguin",
    "HarperCollins",
    "Bloomsbury",
    "Oxford",
    "Cambridge",
    "Macmillan",
];

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-800 mt-30">
            {/* Hero Section */}
            <section className="px-6 py-20 lg:flex items-center max-w-7xl mx-auto">
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold leading-tight mb-4">
                        We're a passionate team bringing stories to life online.
                    </h1>
                    <p className="text-gray-600 text-lg">
                        At BookVerse, our mission is to make reading accessible, enjoyable,
                        and unforgettable. From fiction to academic, we house everything a
                        reader dreams of.
                    </p>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <img
                        src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
                        alt="Our Team"
                        className="rounded-2xl shadow-lg w-full object-cover h-[350px]"
                    />
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {timeline.map((event, index) => (
                            <div key={index}>
                                <h4 className="text-indigo-600 font-semibold">{event.date}</h4>
                                <h3 className="text-lg font-bold mt-2">{event.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands / Testimonials */}
            <section className=" bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] text-white py-20 px-6">                
            <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Readers love Inkwell</h2>
                    <p className="mb-8">
                        Thousands of happy readers trust us for their daily dose of stories,
                        learning, and imagination. Here's who we partner with:
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {brands.map((brand, i) => (
                            <span
                                key={i}
                                className="text-white bg-white/10 px-4 py-2 rounded-xl text-sm font-semibold"
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our People Section */}
            <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Meet Our People</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <img
                        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                        alt="Team Culture 1"
                        className="rounded-xl object-cover h-64 w-full"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                        alt="Team Culture 2"
                        className="rounded-xl object-cover h-64 w-full"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="Team Culture 3"
                        className="rounded-xl object-cover h-64 w-full"
                    />
                </div>
            </section>

            {/* Final Statement */}
            <section className="bg-gray-100 py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                        We believe reading can change the world.
                    </h2>
                    <p className="text-lg text-gray-700">
                        Our goal is to inspire minds, spread knowledge, and keep stories
                        alive — one book at a time.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
