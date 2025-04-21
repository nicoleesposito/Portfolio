import React from 'react';
import { motion } from 'framer-motion';

// As the user scrolls, the Framer Motion brings in the information smoothly. Includes a brief bio, skills, and interests
function About() {
    return (
        <section id="about" className="about_section">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                About Me!
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                I'm currently a senior at the University of Central Florida, studying web and mobile application development. As a tech enthusiast, I'm passionate about turning creative ideas into real, functional solutions — from sleek websites to user-friendly mobile apps. What drives me is a constant desire to learn and grow. I find motivation in staying productive, exploring new technologies, and continuously sharpening my skills. Outside of my coursework, I've built and designed websites for clients using content management systems, which has given me hands-on experience in both development and design.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Beyond development, I love diving into the world of hardware. Building and customizing computers has deepened my understanding of how different technologies work together, and that knowledge helps me craft better digital experiences. Whether it’s modern trends or vintage tech, I’m always curious about how technology evolves and how I can use it to create something meaningful.
            </motion.p>

            <motion.div
                className="skillset"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h3>My Skillset</h3>
                <div className="skills-grid">
                    <motion.div
                        className="row"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="skill"><img src='/portfolio/img/code.png' alt="Code" />HTML, CSS, JavaScript, PHP, SASS</div>
                        <div className="skill"><img src='/portfolio/img/physics.png' alt="React" />React & React Native</div>
                        <div className="skill"><img src='/portfolio/img/ui.png' alt="UI" />UI/UX and responsive design</div>
                    </motion.div>

                    <motion.div
                        className="row"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <div className="skill"><img src='/portfolio/img/bug.png' alt="Bug" />Testing & Debugging</div>
                        <div className="skill"><img src='/portfolio/img/database-storage.png' alt="DB" />PHPMyAdmin + MySQL</div>
                        <div className="skill"><img src='/portfolio/img/git.png' alt="Git" />Version Control (Git/GitHub)</div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default About;
