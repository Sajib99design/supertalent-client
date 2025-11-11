import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function About() {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
    };

    const textContainerVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                delay: 0.2,
                staggerChildren: 0.15
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <motion.div
            ref={ref}
            className="mx-auto mt-20 bg-gradient-to-l from-[#632EE3]/10 to-orange-900/10 md:py-16 py-6 "
        >
            <div className="grid max-w-7xl mx-auto md:grid-cols-2 gap-10 items-center md:px-10 px-3">
                {/* Image Side (Slide from Left) */}
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <img
                        src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                        alt="About Platform"
                        className="rounded-2xl shadow-lg w-full"
                    />
                </motion.div>

                {/* Text Content Side (Slide from Right & Staggered items) */}
                <motion.div
                    className="space-y-4 max-sm:text-center"
                    variants={textContainerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 className="title" variants={itemVariants}>
                        About the Platform
                    </motion.h2>

                    <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                        Welcome to <span className="font-semibold">JobConnect</span> — a
                        modern job platform where you can create, manage, and accept tasks
                        effortlessly. We connect passionate developers, designers, and
                        professionals with real-world opportunities.
                    </motion.p>

                    <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                        Post your job today or explore hundreds of listings to find your
                        next project. Whether you are an employer or freelancer, our
                        platform ensures trust, transparency, and speed.
                    </motion.p>

                    <motion.button
                        className="mt-4 bg-gradient-to-r from-[#632EE3] to-orange-900 text-white font-semibold py-3 px-6 rounded-full hover:opacity-80 transition"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }} 
                    >
                        Create a Job
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About