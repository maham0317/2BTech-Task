import React from 'react'
import image from "../../assets/about.png"
import CountUp from "react-countup"
import { motion } from "framer-motion"

const AboutUs = () => {
    return (
        <div className="bg-black">
            <div className="container flex flex-wrap md:flex-nowrap px-6 md:px-auto gap-8 py-20 items-center">

                {/* Image - Slide in from LEFT */}
                <motion.img
                    src={image}
                    className="md:w-110"
                    initial={{ opacity: 0, y: -100 }}  // Slide from left
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                />

                {/* Text Section - Slide in from RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}  // Slide from right
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-white text-3xl md:text-6xl font-bold leading-snug">
                        About Animatory
                    </h1>
                    <p className='text-white font-light mt-4'>
                        At Animatory, we blend creativity with innovation to produce high-impact commercials,
                        corporate films, animations, and motion graphics that captivate and convert.
                        Our passion? Turning ideas into visually stunning stories that leave a lasting impression.
                    </p>

                    <div className="flex md:flex-nowrap sm:flex-wrap gap-10 md:gap-20 mt-5">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold">
                                <CountUp end={20} duration={2} suffix="+" />
                            </h2>
                            <p>Years of experience</p>
                        </div>

                        <div className="text-white">
                            <h2 className="text-2xl font-bold">
                                <CountUp end={478} duration={2} />
                            </h2>
                            <p>Repeated Clients</p>
                        </div>

                        <div className="text-white">
                            <h2 className="text-2xl font-bold">
                                <CountUp end={350} duration={2} suffix="+" />
                            </h2>
                            <p>Completed Projects</p>
                        </div>
                    </div>

                    <button className='bg-lime-400 text-black px-6 py-3 my-8 hover:bg-lime-300 transition-all duration-300'>
                        Explore us
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUs
