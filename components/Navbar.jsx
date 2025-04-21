import React from 'react';


// Navbar at the top of the page which anchors to the id's. I also include a mini logo that links back to the home page.
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#home"><img src="/portfolio/img/web-development.png"></img></a>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
