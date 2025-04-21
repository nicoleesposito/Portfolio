import React from 'react';

function Footer() {
    return (
        <footer style={{ background: '#222', color: '#fff', padding: '2rem 1rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
                <a href="#home" style={linkStyle}>Home</a> |
                <a href="#about" style={linkStyle}>About</a> |
                <a href="#projects" style={linkStyle}>Projects</a> |
                <a href="#contact" style={linkStyle}>Contact</a> |
                <a href="https://www.linkedin.com/in/nicole--esposito/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a> |
                <a href="https://github.com/nicoleesposito" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
            </div>
            <div>
                © {new Date().getFullYear()} Nicole’s Portfolio. All rights reserved.
            </div>
        </footer>
    );
}

const linkStyle = {
    color: '#8cbdf1',
    margin: '0 0.5rem',
    textDecoration: 'none',
    fontWeight: '500'
};

export default Footer;
