import React from 'react';
import { motion } from 'framer-motion';

// Put all of the projects into an object that will be accessed through a map.
function Projects() {
    const projects = [
        {
            title: 'Exercise App',
            description: 'Using React, I developed an Exercise App designed to assist users with their workout routines. The app features both a countdown timer and a stopwatch, allowing users to either set timed intervals for exercises or track time freely. The interface has labeled controls for starting, pausing, and resetting each function. This project emphasizes real-time updates using state management and showcases my ability to create interactive, web applications focused on functionality.',
            link: 'https://nicoleesposito.github.io/updated-exercise-app/',
            image: '/Portfolio/img/exercise.jpg',
        },
        {
            title: 'To-Do List',
            description: 'I built a To-Do List application using React Native, designed for mobile use. The app allows users to seamlessly add, view, and mark tasks completed, making it a practical tool for daily organization. It features a simple interface optimized for touch interaction. This project demonstrates my ability to create efficient mobile applications while following best practices in React Native development.',
            link: 'https://nicoleesposito.github.io/ExpoTodoList/',
            image: '/Portfolio/img/todolist.jpg',
        },
        {
            title: 'Quiz App',
            description: 'I developed an interactive Quiz App using React Native that supports multiple types of questions including single-answer, multiple-choice, and true/false formats. The app tracks user selections throughout the quiz and calculates the final score, displaying it upon completion. It features a simple navigation and a responsive layout created for mobile devices. This project showcases my skills in managing state and structuring user-friendly experiences in mobile applications using React Native.',
            link: 'https://github.com/nicoleesposito/ReactNativeQuizApp',
            image: '/Portfolio/img/quiz.jpg',
        },
        {
            title: 'Game Review - Content Management System',
            description: 'I built a Content Management System (CMS) for game reviews using PHP. This web application allows users to log in to an account and interact with the platform by submitting game reviews and posting comments. The system includes user-based permissions to control access, and it dynamically generates an RSS feed and an XML output of the reviews, demonstrating proficiency in server-side scripting and data syndication. The project emphasizes secure form handling, session management, and database integration— offering a backend experience tailored to content publishing.',
            link: 'https://students.gaim.ucf.edu/~ni880937/dig3134c/assignment05/reviews.php',
            image: '/Portfolio/img/CMS.jpg',
        }
    ];

    // the information from the object is mapped out and has animations applied to it as the user scrolls.
    return (
        <section id="projects" className="projects_section">
            <h2>Projects</h2>
            <div className="project_grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`project_row ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <motion.div
                            className="project_card"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={index === projects.length - 1 ? 'last-image' : ''}
                            />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </motion.div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}

export default Projects;
