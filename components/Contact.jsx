import React, { useState } from 'react';
import { motion } from 'framer-motion';

// contact form has states for submission which include errors and successes
function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    function Change(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        setSuccess(false);
    }

    function Submit(event) {
        event.preventDefault();
        // if the form does not have a name, email, or message, then an error is shown.
        if (!form.name || !form.email || !form.message) {
            setError('Please fill out all fields.');
            setSuccess(false);
            return;
        }
        // if the validation for the form is not matching the regular expression, it won't be valid.
        if (!/\S+@\S+\.\S+/.test(form.email)) {
            setError('Invalid email address.');
            setSuccess(false);
            return;
        }

        setError('');
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
    }

    // Contact form is created.
    return (
        <section id="contact" className="contact_section">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Contact Me</h2>
                <p>Send me a message or get in touch with me on social media!</p>
                <form className="contact_form" onSubmit={Submit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={Change}
                        className="contact_input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={Change}
                        className="contact_input"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={Change}
                        className="contact_textarea"
                    />
                    {error && <p className="form_error">{error}</p>}
                    {success && <p className="form_success">Message sent successfully!</p>}
                    <button type="submit" className="contact_button">Send</button>
                </form>
                <div className="socials">
                    <a href='https://github.com/nicoleesposito'><img src="/portfolio/img/github.png"></img></a>
                    <a href='https://www.linkedin.com/in/nicole--esposito/'><img src="/portfolio/img/linkedin.png"></img></a>
                    <a href='https://app.joinhandshake.com/profiles/8tcgpq'><img src="/portfolio/img/handshake.png"></img></a>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;
