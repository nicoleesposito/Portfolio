import React from 'react';
import { motion } from 'framer-motion';

// Home Section that includes the introductory information to anyone visiting the page.
// Frame Motion is applied to add a load effect for when the page is loaded.
function Home() {
    return (
        <section id="home" className="home_section">
            <div className="overlay">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Nicole Esposito
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Web & Mobile App Developer
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Based in Orlando, Florida
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Hi there, and welcome to my portfolio!
                    I'm Nicole — a passionate creator excited about all things tech and design. Whether you're here to check out my latest projects, learn more about me, or to just explore, I'm glad you're here. Please take a look around and discover how I turn ideas into interactive experiences!
                </motion.p>
            </div>
        </section>
    );
}

export default Home;
